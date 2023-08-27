import { ApolloError } from "apollo-server-core";
import { GraphQlContext } from "../../@types/types";
import { Prisma } from "@prisma/client";
import { TConversationPopulated } from "../../@types/Conversations";
import { pubsubLabels } from "../../helpers/pubsub-labels";

export const conversationResolvers = {
  Query: {
    conversations: async (
      _parent: any,
      args: { userId: string },
      context: GraphQlContext,
      _info: any
    ): Promise<Array<TConversationPopulated>> => {
      const { prisma } = context;
      const { userId } = args;

      if (!userId) {
        throw new ApolloError("Not authorized!");
      }

      try {
        const conversations = await prisma.conversation.findMany({
          where: {
            participants: {
              some: {
                userId: {
                  equals: userId,
                },
              },
            },
          },
          include: conversationPopulated,
        });

        return conversations;
      } catch (error: any) {
        console.log("conversations error", error);
        throw new ApolloError(error.message);
      }
    },
  },
  Mutation: {
    createConversation: async (
      _parent: any,
      args: { participantIds: Array<string> },
      context: GraphQlContext,
      _info: any
    ): Promise<{ conversationId: string }> => {
      const { prisma /*session */, pubsub } = context;
      const { participantIds } = args;

      // if(!session.user){
      //   throw new ApolloError("Not Authorized!")
      // }

      const userId = participantIds[0];

      try {
        const conversation = await prisma.conversation.create({
          data: {
            participants: {
              createMany: {
                data: participantIds.map((id) => ({
                  userId: id,
                  hasSeenLatestMessage: id === userId,
                })),
              },
            },
          },
          include: conversationPopulated,
        });

        // emit a CONVERSATION_CREATED event using pubsub
        pubsub.publish(pubsubLabels.conversationCreated, {
          conversationCreated: conversation,
        });

        return {
          conversationId: conversation.id,
        };
      } catch (error) {
        console.log("createConversation error", error);
        throw new ApolloError("Error creating conversation");
      }
    },
  },
  Subscription: {
    conversationCreated: {
      subscribe: (
        _parent: any,
        args: any,
        context: GraphQlContext,
        _info: any
      ) => {
        const { pubsub } = context;

        pubsub.asyncIterator([pubsubLabels.conversationCreated]);
      },
    },
  },
};

export const participantPopulated =
  Prisma.validator<Prisma.ConversationParticipantInclude>()({
    user: {
      select: {
        id: true,
        username: true,
      },
    },
  });

export const conversationPopulated =
  Prisma.validator<Prisma.ConversationInclude>()({
    participants: {
      include: participantPopulated,
    },
    latestMessage: {
      include: {
        sender: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    },
  });

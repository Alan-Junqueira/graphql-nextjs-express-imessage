import { ApolloError } from "apollo-server-core";
import { GraphQlContext } from "../../@types/types";
import { Prisma } from "@prisma/client";

export const conversationResolvers = {
  Mutation: {
    createConversation: async (
      _parent: any,
      args: { participantIds: Array<string> },
      context: GraphQlContext,
      _info: any
    ): Promise<{ conversationId: string }> => {
      const { prisma /*session */ } = context;
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

        return {
          conversationId: conversation.id,
        };
      } catch (error) {
        console.log("createConversation error", error);
        throw new ApolloError("Error creating conversation");
      }
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

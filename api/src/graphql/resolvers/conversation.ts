import { GraphQlContext } from "../../@types/types";

export const conversationResolvers = {
  Mutation: {
    createConversation: async (
      _parent: any,
      args: { participantIds: Array<string> },
      context: GraphQlContext,
      _info: any
    ) => {
      const { prisma } = context;
      const {participantIds} = args

      console.log(participantIds)
    },
  },
};

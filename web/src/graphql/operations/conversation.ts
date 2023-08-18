import { gql } from "@apollo/client";

export const conversationOperations = {
  Queries: {},
  Mutations: {
    createConversation: gql`
      mutation CreateConversation($participantIds: [String]!){
        createConversation(participantIds: $participantIds){
          conversationId
        }
      }
    `,
  },
  Subscriptions: {},
};

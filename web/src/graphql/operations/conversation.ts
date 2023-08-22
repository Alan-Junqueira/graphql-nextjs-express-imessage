import { gql } from "@apollo/client";

const ConversationFields = `
    conversations(userId: $userId) {
      id
      participants {
        user {
          id
          username
        }
        hasSeenLatestMessage
      }
      latestMessage {
        id
        sender {
          id
          username
        }
        body
        createdAt
      }
      updatedAt
    }
`;

export const conversationOperations = {
  Queries: {
    conversations: gql`
      query Conversations($userId: String!) {
        ${ConversationFields}
      }
    `,
  },
  Mutations: {
    createConversation: gql`
      mutation CreateConversation($participantIds: [String]!) {
        createConversation(participantIds: $participantIds) {
          conversationId
        }
      }
    `,
  },
  Subscriptions: {},
};

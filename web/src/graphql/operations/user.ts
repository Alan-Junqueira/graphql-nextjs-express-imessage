import { gql } from "@apollo/client";

export const userOperations = {
  Queries: {},
  Mutations: {
    createUsername: gql`
      mutation CreateUsername(
        $username: String!
        $email: String!
        $image: String!
        $name: String!
        $userId: String!
      ) {
        createUsername(
          username: $username
          email: $email
          image: $image
          name: $name
          userId: $userId
        ) {
          success
          error
        }
      }
    `,
  },
  Subscriptions: {},
};

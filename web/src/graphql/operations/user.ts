import { gql } from "@apollo/client";
// usernameToSearch
//
export const userOperations = {
  Queries: {
    searchUsers: gql`
      query SearchUsers($myUsername: String!, $usernameToSearch: String!) {
        searchUsers(
          myUsername: $myUsername
          usernameToSearch: $usernameToSearch
        ) {
          id
          username
        }
      }
    `,
  },
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

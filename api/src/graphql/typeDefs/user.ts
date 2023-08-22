import { gql } from "apollo-server-core";

export const userTypeDefs = gql`
  type User {
    id: String
    name: String
    username: String
    email: String
    emailVerified: Boolean
    image: String
  }

  type SearchedUser {
    id: String
    username: String
  }

  type Query {
    searchUsers(myUsername: String, usernameToSearch: String): [SearchedUser]
  }

  type Mutation {
    createUsername(
      username: String
      email: String
      name: String
      userId: String
      image: String
    ): CreateUsernameResponse
  }

  input CreateUsernameInput {
    username: String
    email: String
    image: String
    name: String
    userId: String
  }

  type CreateUsernameResponse {
    success: Boolean
    error: String
  }
`;

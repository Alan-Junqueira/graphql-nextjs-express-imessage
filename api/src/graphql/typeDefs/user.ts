import { gql } from "apollo-server-core";

export const userTypeDefs = gql`
  type User {
    id: String
    username: String
  }

  type Query {
    searchUsers(username: String): [User]
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

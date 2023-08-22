import { gql } from "apollo-server-core";

export const MessageTypeDef = gql`
  type Message {
    id: String
    sender: User
    body: String
    createdAt: Date
  }
`;

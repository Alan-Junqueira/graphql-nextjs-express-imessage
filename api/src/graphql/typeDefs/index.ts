import { conversationTypeDefs } from "./conversation";
import { MessageTypeDef } from "./message";
import { userTypeDefs } from "./user";

export const typeDefs = [userTypeDefs, conversationTypeDefs, MessageTypeDef];

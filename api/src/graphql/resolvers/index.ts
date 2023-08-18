import { conversationResolvers } from "./conversation";
import { userResolvers } from "./user";
import merge from "lodash.merge";

export const resolvers = merge({}, userResolvers, conversationResolvers);

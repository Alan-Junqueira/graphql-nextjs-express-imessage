import { ApolloError } from "apollo-server-core";
import { GraphQlContext, ICreateUsernameResponse } from "../../@types/types";
import { CreateUsernameProps, SearchUsersProps } from "../typeDefs/userDTO";
import { User } from "@prisma/client";

export const userResolvers = {
  Query: {
    searchUsers: async (
      _parent: any,
      args: SearchUsersProps,
      context: GraphQlContext,
      _info: any
    ): Promise<User[]> => {
      const { myUsername, usernameToSearch } = args;
      const { prisma } = context;

      if (!myUsername) {
        throw new ApolloError("Not authorized");
      }

      try {
        const users = await prisma.user.findMany({
          where: {
            username: {
              contains: usernameToSearch,
              not: myUsername,
              mode: "insensitive",
            },
          },
        });

        return users;
      } catch (error) {
        console.log("searchUsers error", error);
        throw new ApolloError(error?.message);
      }
    },
  },
  Mutation: {
    createUsername: async (
      _parent: any,
      args: CreateUsernameProps,
      context: GraphQlContext,
      _info: any
    ): Promise<ICreateUsernameResponse> => {
      const { prisma, session } = context;
      // console.log("context session", context.session);

      if (!args.email || !args.image || !args.name || !args.userId) {
        return {
          error: "Not authorized",
        };
      }

      // const { id } = session.user
      try {
        const existingUser = await prisma.user.findUnique({
          where: {
            username: args.username,
          },
        });

        if (existingUser) {
          return {
            error: "Username already taken. Try another.",
          };
        }

        await prisma.user.update({
          where: {
            id: args.userId,
          },
          data: {
            username: args.username,
          },
        });

        return {
          success: true,
        };
      } catch (error) {
        console.log("CREATE USERNAME ERROR", error);
        return {
          error: error?.message,
        };
      }
    },
  },
};

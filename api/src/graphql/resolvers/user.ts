import { GraphQlContext, ICreateUsernameResponse } from "../../@types/types";
import { CreateUsernameProps } from "../typeDefs/userDTO";

export const userResolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: async (
      _parent: any,
      args: CreateUsernameProps,
      // context: GraphQlContext,
      context: any,
      _info: any
    ): Promise<ICreateUsernameResponse> => {
      // const { prisma, session } = context
      // console.log("context session", context.session);

      // if (!args.email || !args.image || !args.name || args.userId) {
      //   return {
      //     error: "Not authorized"
      //   }
      // }

      // const { id } = session.user
      console.log("args",args);
      try {
        // const existingUser = await prisma.user.findUnique({
        //   where: {
        //     username: args.username
        //   }
        // })

        // if (existingUser) {
        //   return {
        //     error: "Username already taken. Try another."
        //   }
        // }

        // await prisma.user.update({
        //   where: {
        //     id: args.userId
        //   },
        //   data: {
        //     username:args.username
        //   }
        // })

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

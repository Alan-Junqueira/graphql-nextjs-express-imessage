import { GraphQlContext, ICreateUsernameResponse } from "../../@types/types"

export const userResolvers = {
  Query: {
    searchUsers: () => { }
  },
  Mutation: {
    createUsername: async (
      _parent: any,
      args: { username: string },
      context: GraphQlContext,
      _info: any
    ): Promise<ICreateUsernameResponse> => {
      const { username } = args
      const { prisma, session } = context
      console.log("Hey at the api", username)
      console.log("Here is the context", context)

      if (!session?.user) {
        return {
          error: "Not authorized"
        }
      }

      const { id } = session.user

      try {
        const existingUser = await prisma.user.findUnique({
          where: {
            username
          }
        })

        if(existingUser){
          return {
            error: "Username already taken. Try another."
          }
        }

        await prisma.user.update({
          where: {
            id
          },
          data: {
            username
          }
        })

        return {
          success: true
        }
      } catch (error) {
        console.log("CREATE USERNAME ERROR", error)
        return {
          error: error?.message
        }
      }
    }
  }
}
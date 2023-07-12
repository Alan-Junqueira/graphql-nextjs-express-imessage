export const userResolvers = {
  Query: {
    searchUsers: () => { }
  },
  Mutation: {
    createUsername: (
      _parent: any,
      args: { username: string },
      context: any,
      _info: any
    ) => {
      const { username } = args
      console.log("Hey at the api", username)
    }
  }
}
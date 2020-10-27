export const resolvers = {
  Query: {
    allUsers: async (parent, args, { User }) => {
      const users = await User.find()
      return users.map(u => {
        u._ud = u._ud.toString()
        return x
      })
    }
  },
  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save()
      user._id = user._id.toString()
      return user
    }
  }
}

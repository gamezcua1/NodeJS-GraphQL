
const UsersResolvers = {
  Query: {
    me: (root, args, context) => context.currentUser,
  }
};

export default UsersResolvers;
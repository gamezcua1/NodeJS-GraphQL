import User from '../../models/user';

const UsersResolvers = {
  Query: {
    me: (root, args, context) => context.currentUser,
    users: async (root, args, context) => await User.findAll(),
    user: async (root, args, context) => await User.findByPk(args.id)
  }
};

export default UsersResolvers;
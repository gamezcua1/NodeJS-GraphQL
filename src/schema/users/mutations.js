import User from '../../models/user';

const UsersMutation = {
	Mutation: {
		async signup(root, args, context) {
			if (context.currentUser) return;
			const { name, username, password } = args;

			const newUser = await User.create({
				name,
				username,
				password
      });
      
      return newUser;
		}
	}
};

export default UsersMutation;

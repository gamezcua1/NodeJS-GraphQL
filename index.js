import { ApolloServer } from 'apollo-server';
import { types, resolvers } from './src/index';

const server = new ApolloServer({
	typeDefs: types,
	resolvers: resolvers,
	context: ({ req }) => {
		let authToken = null;
		let currentUser = null;


		authToken = req.headers.token;

		if(authToken) {
			currentUser = getUser(authToken);
		} else {
			console.log("Unable to authenticate");
		}
		
		return {
			authToken,
			currentUser
		}
	}
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});

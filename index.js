import { ApolloServer } from 'apollo-server-express';
import { types, resolvers } from './src/index';
import express from 'express';
import User from './src/models/user';

require('dotenv').config();
const app = express();

const server = new ApolloServer({
	typeDefs: types,
	resolvers: resolvers,
	context: async ({ req }) => {
		const token = req.headers.authorization;
		const user = await User.getUser(token);
		return { user };
	}
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));

import "./src/models/associations";
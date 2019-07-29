import { gql } from 'apollo-server';

export default gql`
	type Author {
		id: ID!
		name: String!
		city: String
		books: [Book]
		createdAt: Date
		updatedAt: Date
	}

	extend type Mutation {
		createAutor(name: String!, city: String): Author
	}

	extend type Query {
		authors: [Author]
		author(id: ID!): Author
	}
`;

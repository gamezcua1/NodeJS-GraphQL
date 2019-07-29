import { gql } from "apollo-server";

export default gql`
	type Book {
		id: ID!
		title: String!
		authorId: ID!
		year: Int
		author: Author
	}
	
	extend type Mutation {
		createBook(title: String!, authorId: ID!, year: Int): Book
	}

	extend type Query {
		books: [Book]
		book(id: ID): Book
		bookByName(title: String): [Book]
	}

`;
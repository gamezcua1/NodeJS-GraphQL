import Author from '../../models/author';
import Book from '../../models/book';
import { isLogged } from '../../helpers/auth';

const Resolvers = {
	Query: {
		authors: isLogged(async () => {
			const authors = await Author.findAll();
			return authors;
		}),
		author: isLogged(async (_, { id }) => {
			const author = await Author.findByPk(id);
			return author;
		})
	},
	Author: {
		async books(parent, _) {
			return await parent.getBooks();
		}
	}
};

export default Resolvers;

import { Op } from 'sequelize';

import Book from '../../models/book';
import Author from '../../models/author';
import { isLogged } from '../../helpers/auth';

const resolvers = {
	Query: {
		books: isLogged(async (parent, args) => {
			const books = await Book.findAll();
			return books;
		}),
		book: isLogged(async (parent, { id }) => {
			const book = await Book.findByPk(id);
			return JSON.stringify(book);
		}),
		bookByName: isLogged(async (parent, { title }) => {
			return await Author.findAll({
				where: {
					[Op.like]: title
				}
			});
		})
	},
	Book: {
		async author(parent, args) {
			return await parent.getAuthor();
		}
	}
};

export default resolvers;

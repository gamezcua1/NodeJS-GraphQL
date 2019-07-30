import { Op } from 'sequelize';

import Book from '../../models/book';
import Author from '../../models/author';

const resolvers = {
	Query: {
		async books(parent, args) {
			const books = await Book.findAll();
			return books;
		},
		async book(parent, { id }) {
			const book = await Book.findByPk(id);
			return JSON.stringify(book);
		},
		async bookByName(parent, { title }) {
			return await Author.findAll({
				where: {
					[Op.like]: title
				}
			});
		}
	},
	Book: {
		async author(parent, args) {
			return await parent.getAuthor();
		}
	}
};

export default resolvers;

import Author from '../../models/author';
import Book from '../../models/book';

const Resolvers = {
	Query: {
		async authors() {
			const authors = await Author.findAll();
			return authors;
		},
		async author(_, { id }) {
			const author = await Author.findByPk(id);
			return author;
		}
	},
	Author: {
		async books(parent, _){
			const books = await Book.findAll({
				where: {
					authorId: parent.id
				}
			});
			return books;
		}
	}
};

export default Resolvers;

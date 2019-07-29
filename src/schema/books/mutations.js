import Book from '../../models/book';
import books from './data';

const Mutation = {
	Mutation: {
		async createBook(parent, args) {
			const { title, authorId, year } = args;
			const newBook = await Book.create({
				title,
				authorId,
				year
			});
			return newBook;
		}
	}
};

export default Mutation;

import Book from '../../models/book';

import { isLogged } from '../../helpers/auth';

const Mutation = {
	Mutation: {
		createBook: isLogged(async (parent, args) => {
			const { title, authorId, year } = args;
			const newBook = await Book.create({
				title,
				authorId,
				year
			});
			return newBook;
		})
	}
};

export default Mutation;

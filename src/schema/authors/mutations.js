import Author from '../../models/author';
import { isLogged } from '../../helpers/auth';

const Mutations = {
	Mutation: {
		createAutor: isLogged(async (_, args) => {
			const { name, city } = args;
			const newAuthor = await Author.create({
				name,
				city
			});
			return newAuthor;
		})
	}
};

export default Mutations;

import Author from '../../models/author';

const Mutations = {
	Mutation: {
		async createAutor(_, args) {
			const { name, city } = args;
			const newAuthor = await Author.create({
				name,
				city
			});
			return newAuthor;
		}
	}
};

export default Mutations;

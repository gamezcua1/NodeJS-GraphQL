import Author from './author';
import Book from './book';
import sequelize from './db';

Book.belongsTo(Author, { as: 'Author', foreignKey: 'authorId' });

Author.hasMany(Book, {
	as: 'Books',
	foreignKey: 'authorId'
});

(async () => {
	await sequelize.sync();
})();

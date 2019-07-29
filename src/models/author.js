import { DataTypes } from 'sequelize';
import sequelize from './db';
import Books from './book';

const Author = sequelize.define(
	'Author',
	{
		name: DataTypes.STRING,
		city: DataTypes.STRING
	},
	{}
);

// Author.hasMany(Books, {
// 	primaryKey: 'authorId'
// });
// Author.belongsTo(Books, {
// 	primaryKey: 'authorId'
// });

export default Author;

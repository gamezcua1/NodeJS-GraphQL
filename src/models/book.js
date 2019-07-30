import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from './db';

class Book extends Model {}
Book.init(
	{
		title: DataTypes.STRING,
		year: DataTypes.INTEGER,
		authorId: DataTypes.INTEGER
	},
	{
		sequelize
	}
);

export default Book;

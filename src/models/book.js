import { DataTypes } from "sequelize";
import sequelize from './db'

const Book = sequelize.define(
	'Book',
	{
		title: DataTypes.STRING,
		year: DataTypes.INTEGER,
		authorId: DataTypes.INTEGER
	},
	{}
);

Book.associate = function(models) {
	Book.hasOne(models.Author);
	Book.belongsToOne(models.Author)
};

export default Book;

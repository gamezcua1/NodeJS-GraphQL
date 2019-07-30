import { DataTypes, Model } from 'sequelize';
import sequelize from './db';

class Author extends Model {}

Author.init(
	{
		name: DataTypes.STRING,
		city: DataTypes.STRING
	},
	{
		sequelize
	}
);

export default Author;

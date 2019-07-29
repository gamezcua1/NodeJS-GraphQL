import { DataTypes } from 'sequelize';
import sequelize from './db';

const User = sequelize.define(
	'User',
	{
		username: DataTypes.STRING,
		name: DataTypes.STRING,
		password: DataTypes.STRING
	},
	{}
);

User.associate = function(models) {
	// associations can be defined here
};

export default User;

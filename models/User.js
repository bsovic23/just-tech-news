const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creating user model
class User extends Model {};

// define table columns and configurations
User.init({
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
},
{
    // sequlize connection
    sequelize,
    timestamps: false,
    freezeTableName: true, 
    underscored: true,
    modelName: 'user'
}
);

module.exports = User;
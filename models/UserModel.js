// models/UserModel.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';
import TypeUsersModel from './TypeUsersModel.js';

const UserModel = sequelize.define('UserModel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

export default UserModel;

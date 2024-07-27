// models/Menu.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';

const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_restaurante: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre_plato: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion_plato: {
    type: DataTypes.TEXT,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
  }
}, {
  tableName: 'menus',
  timestamps: false,
});

export default Menu;

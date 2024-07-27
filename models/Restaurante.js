// models/Restaurante.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';
import Menu from './Menu.js';

const Restaurante = sequelize.define('Restaurante', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  tipo_cocina: {
    type: DataTypes.STRING(100),
  },
  calificacion: {
    type: DataTypes.DECIMAL(3, 2),
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  horario_apertura: {
    type: DataTypes.TIME,
  },
  horario_cierre: {
    type: DataTypes.TIME,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'restaurantes',
  timestamps: false,
});

Restaurante.hasMany(Menu, { as: 'menus', foreignKey: 'id_restaurante' });
Menu.belongsTo(Restaurante, { foreignKey: 'id_restaurante' });

export default Restaurante;

// models/Restaurante.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';

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
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'restaurantes',
  timestamps: false,
});

export default Restaurante;

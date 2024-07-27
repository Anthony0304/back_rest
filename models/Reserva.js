import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';
import UserModel from './UserModel.js';  // Asegúrate de que esta ruta es correcta
import Restaurante from './Restaurante.js';  // Asegúrate de que esta ruta es correcta

const Reserva = sequelize.define('Reserva', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserModel,
      key: 'id'
    }
  },
  id_restaurante: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Restaurante,
      key: 'id'
    }
  },
  fecha_reserva: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora_reserva: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  numero_personas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'),
    defaultValue: 'pendiente',
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'reservas',
  timestamps: false,
});

export default Reserva;

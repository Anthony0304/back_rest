import Reserva from '../models/Reserva.js';
import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '../config/config.js';
import UserModel from '../models/UserModel.js';

// Configurar nodemailer para enviar correos
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

export const getAllReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createReserva = async (req, res) => {
  const { id_usuario, id_restaurante, fecha_reserva, hora_reserva, numero_personas, email } = req.body;

  try {
    const reservasExistentes = await Reserva.findAll({
      where: {
        id_restaurante,
        fecha_reserva,
        hora_reserva,
      }
    });

    if (reservasExistentes.length > 0) {
      return res.status(400).json({ error: 'No hay disponibilidad para esta fecha y hora' });
    }

    const reserva = await Reserva.create({ id_usuario, id_restaurante, fecha_reserva, hora_reserva, numero_personas });

    const user = await UserModel.findByPk(id_usuario);
    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'Confirmación de Reserva',
      text: `Tu reserva ha sido confirmada para el ${fecha_reserva} a las ${hora_reserva}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error al enviar el correo:', error);
        return res.status(500).json({ error: 'Error al enviar el correo de confirmación', details: error.message });
      } else {
        console.log('Correo enviado:', info.response);
        res.status(201).json({ reserva, mensaje: 'Reserva creada y correo de confirmación enviado' });
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      await reserva.update(req.body);
      res.json(reserva);
    } else {
      res.status(404).json({ error: "Reserva no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      await reserva.destroy();
      res.json({ message: "Reserva eliminada" });
    } else {
      res.status(404).json({ error: "Reserva no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

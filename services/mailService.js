// services/mailService.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAILGUN_SMTP_HOST,
  port: process.env.MAILGUN_SMTP_PORT,
  auth: {
    user: process.env.MAILGUN_SMTP_USER,
    pass: process.env.MAILGUN_SMTP_PASSWORD,
  }
});

export async function enviarMailVerificacion(direccion, token) {
  return await transporter.sendMail({
    from: `Sistema de Gestión de Reservas <${process.env.MAILGUN_SMTP_USER}>`,
    to: direccion,
    subject: "Verificación de nueva cuenta - Sistema de Gestión de Reservas",
    html: crearMailVerificacion(token)
  });
}

export async function enviarMailRestablecimiento(direccion, token) {
  return await transporter.sendMail({
    from: `Sistema de Gestión de Reservas <${process.env.MAILGUN_SMTP_USER}>`,
    to: direccion,
    subject: "Restablecimiento de contraseña - Sistema de Gestión de Reservas",
    html: crearMailRestablecimiento(token)
  });
}

function crearMailVerificacion(token) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <style>
        html {
          background-color: white;
        }
        body {
          max-width: 600px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: auto;
          background-color: rgb(229, 255, 246);
          padding: 40px;
          border-radius: 4px;
          margin-top: 10px;
        }
      </style>
      <body>
        <h1>Verificación de correo electrónico - SISTEMA DE GESTION DE RESERVAS</h1>
        <p>Se ha creado una cuenta con este correo electrónico.</p>
        <p>Si esta cuenta no fue creada por usted, desestime este correo.</p>
        <p>Si usted creó la cuenta, entonces verifique la cuenta <a href="http://localhost:4000/verificar/${token}" target="_blank" rel="noopener noreferrer">haciendo click aquí</a>.</p>
        <p><strong>ANTHONY GANCHOZO</strong></p>
        <p>CEO</p>
      </body>
    </html>
  `;
}

function crearMailRestablecimiento(token) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <style>
        html {
          background-color: white;
        }
        body {
          max-width: 600px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: auto;
          background-color: rgb(229, 255, 246);
          padding: 40px;
          border-radius: 4px;
          margin-top: 10px;
        }
      </style>
      <body>
        <h1>Restablecimiento de contraseña - SISTEMA DE GESTION DE RESERVAS</h1>
        <p>Se ha solicitado un restablecimiento de contraseña para este correo electrónico.</p>
        <p>Si esta solicitud no fue realizada por usted, desestime este correo.</p>
        <p>Para restablecer su contraseña, haga click en el siguiente enlace: <a href="http://localhost:4000/reset-password/${token}" target="_blank" rel="noopener noreferrer">Restablecer contraseña</a>.</p>
        <p><strong>ANTHONY GANCHOZO</strong></p>
        <p>CEO</p>
      </body>
    </html>
  `;
}

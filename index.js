// index.js
import express from 'express';
import { sequelize } from './db/conexion.js';
import { RouterUser } from './router/UserRouter.js';
import { PORT } from './config/config.js';

const app = express();

app.use(express.json());
app.use('/api', RouterUser);

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => console.error('Error al sincronizar la base de datos', err));

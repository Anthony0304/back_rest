// router/ReservaRouter.js
import express from 'express';
import { getAllReservas, createReserva, updateReserva, deleteReserva } from '../controller/ReservaController.js';

const router = express.Router();

router.get('/reservas', getAllReservas);
router.post('/reservas', createReserva);
router.put('/reservas/:id', updateReserva);
router.delete('/reservas/:id', deleteReserva);

export default router;

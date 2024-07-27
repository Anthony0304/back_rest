// router/RestauranteRouter.js
import express from 'express';
import { getAllRestaurantes, createRestaurante, updateRestaurante, deleteRestaurante } from '../controller/RestauranteController.js';

const router = express.Router();

router.get('/restaurantes', getAllRestaurantes);
router.post('/restaurantes', createRestaurante);
router.put('/restaurantes/:id', updateRestaurante);
router.delete('/restaurantes/:id', deleteRestaurante);

export default router;

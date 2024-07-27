// router/UserRouter.js
import express from 'express';
import { login, getUsers, getOneUser, createUsers, updateUsers, deleteUsers, updateUsersEmail, updateUsersPassword } from '../controller/UserController.js';

const router = express.Router();

router.post('/register', createUsers); // Nueva ruta para registro
router.post('/login', login);
router.get('/users', getUsers);
router.get('/users/:id', getOneUser);
router.post('/users', createUsers);
router.put('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);
router.put('/users/email/:id', updateUsersEmail);
router.put('/users/password/:id', updateUsersPassword);

export default router;

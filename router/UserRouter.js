// router/UserRouter.js
import express from 'express';
import { login, updateUsersPassword, updateUsersEmail, getUsers, createUsers, updateUsers, deleteUsers, getOneUser } from '../controller/UserController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/user/:id', verifyToken, getOneUser);
router.post('/register', createUsers);
router.put('/user/:id', verifyToken, updateUsers);
router.delete('/user/:id', verifyToken, deleteUsers);
router.post('/login', login);
router.put('/user/email/:id', verifyToken, updateUsersEmail);
router.put('/user/password/:id', verifyToken, updateUsersPassword);

export const RouterUser = router;

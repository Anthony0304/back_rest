// controller/UserController.js
import UserModel from '../models/UserModel.js';

// Ejemplo de funciones
export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUsers = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  // Implementa la lógica de inicio de sesión
};

export const updateUsersEmail = async (req, res) => {
  // Implementa la lógica de actualización del email del usuario
};

export const updateUsersPassword = async (req, res) => {
  // Implementa la lógica de actualización de la contraseña del usuario
};

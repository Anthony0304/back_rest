// controller/RestauranteController.js
import Restaurante from '../models/Restaurante.js';
import Menu from '../models/Menu.js';

export const getAllRestaurantes = async (req, res) => {
  try {
    const restaurantes = await Restaurante.findAll({ include: 'menus' });
    res.json(restaurantes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createRestaurante = async (req, res) => {
  const { nombre, direccion, tipo_cocina, calificacion, descripcion, horario_apertura, horario_cierre, menus } = req.body;
  
  try {
    const restaurante = await Restaurante.create({
      nombre,
      direccion,
      tipo_cocina,
      calificacion,
      descripcion,
      horario_apertura,
      horario_cierre,
      menus
    }, {
      include: [{ model: Menu, as: 'menus' }]
    });

    res.status(201).json(restaurante);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateRestaurante = async (req, res) => {
  try {
    const restaurante = await Restaurante.findByPk(req.params.id);
    if (restaurante) {
      await restaurante.update(req.body);
      res.json(restaurante);
    } else {
      res.status(404).json({ error: "Restaurante no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRestaurante = async (req, res) => {
  try {
    const restaurante = await Restaurante.findByPk(req.params.id);
    if (restaurante) {
      await restaurante.destroy();
      res.json({ message: "Restaurante eliminado" });
    } else {
      res.status(404).json({ error: "Restaurante no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

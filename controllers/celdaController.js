const Celda = require('../models/Celda');

exports.crearCelda = async (req, res) => {
  try {
    const celda = new Celda(req.body);
    await celda.save();
    res.status(201).json(celda);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear celda', error });
  }
};

exports.obtenerCeldas = async (req, res) => {
  try {
    const celdas = await Celda.find();
    res.json(celdas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener celdas', error });
  }
};

exports.obtenerCelda = async (req, res) => {
  try {
    const celda = await Celda.findById(req.params.id);
    if (!celda) return res.status(404).json({ mensaje: 'Celda no encontrada' });
    res.json(celda);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener celda', error });
  }
};

exports.actualizarCelda = async (req, res) => {
  try {
    const celda = await Celda.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(celda);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar celda', error });
  }
};

exports.eliminarCelda = async (req, res) => {
  try {
    await Celda.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Celda eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar celda', error });
  }
};

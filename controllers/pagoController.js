const Pago = require('../models/Pago');

exports.crearPago = async (req, res) => {
  try {
    const pago = new Pago(req.body);
    await pago.save();
    res.status(201).json(pago);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar el pago', error });
  }
};

exports.obtenerPagos = async (req, res) => {
  try {
    const pagos = await Pago.find().populate('vehiculo', 'placa');
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener pagos', error });
  }
};

exports.obtenerPago = async (req, res) => {
  try {
    const pago = await Pago.findById(req.params.id).populate('vehiculo', 'placa');
    if (!pago) return res.status(404).json({ mensaje: 'Pago no encontrado' });
    res.json(pago);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el pago', error });
  }
};

exports.actualizarPago = async (req, res) => {
  try {
    const pago = await Pago.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pago);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el pago', error });
  }
};

exports.eliminarPago = async (req, res) => {
  try {
    await Pago.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Pago eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el pago', error });
  }
};

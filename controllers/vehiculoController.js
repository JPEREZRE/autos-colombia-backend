const Vehiculo = require('../models/Vehiculo');

exports.crearVehiculo = async (req, res) => {
  try {
    const vehiculo = new Vehiculo(req.body);
    await vehiculo.save();
    res.status(201).json(vehiculo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear vehículo', error });
  }
};

exports.obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find().populate('propietario');
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener vehículos', error });
  }
};

exports.obtenerVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findById(req.params.id);
    if (!vehiculo) return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener vehículo', error });
  }
};

exports.actualizarVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar vehículo', error });
  }
};

exports.eliminarVehiculo = async (req, res) => {
  try {
    await Vehiculo.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Vehículo eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar vehículo', error });
  }
};

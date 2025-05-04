const mongoose = require('mongoose');

const VehiculoSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true,
    unique: true
  },
  marca: String,
  modelo: String,
  color: String,
  tipo: String,
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);

const mongoose = require('mongoose');

const CeldaSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
    unique: true
  },
  tipo: String,
  estado: {
    type: String,
    enum: ['disponible', 'ocupada'],
    default: 'disponible'
  }
});

module.exports = mongoose.model('Celda', CeldaSchema);

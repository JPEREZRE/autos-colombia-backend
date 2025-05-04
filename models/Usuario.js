const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: {
    type: String,
    unique: true
  },
  telefono: String,
  direccion: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

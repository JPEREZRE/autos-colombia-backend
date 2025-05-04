const mongoose = require('mongoose');

const PagoSchema = new mongoose.Schema({
  vehiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo',
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  fechaPago: {
    type: Date,
    default: Date.now
  },
  metodo: {
    type: String,
    enum: ['efectivo', 'tarjeta', 'transferencia'],
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'pagado'],
    default: 'pagado'
  }
});

module.exports = mongoose.model('Pago', PagoSchema);

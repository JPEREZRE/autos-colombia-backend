const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagoController');

router.post('/', controller.crearPago);
router.get('/', controller.obtenerPagos);
router.get('/:id', controller.obtenerPago);
router.put('/:id', controller.actualizarPago);
router.delete('/:id', controller.eliminarPago);

module.exports = router;

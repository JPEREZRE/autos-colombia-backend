const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehiculoController');

router.post('/', controller.crearVehiculo);
router.get('/', controller.obtenerVehiculos);
router.get('/:id', controller.obtenerVehiculo);
router.put('/:id', controller.actualizarVehiculo);
router.delete('/:id', controller.eliminarVehiculo);

module.exports = router;

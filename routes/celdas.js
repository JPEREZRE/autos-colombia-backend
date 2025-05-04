const express = require('express');
const router = express.Router();
const controller = require('../controllers/celdaController');

router.post('/', controller.crearCelda);
router.get('/', controller.obtenerCeldas);
router.get('/:id', controller.obtenerCelda);
router.put('/:id', controller.actualizarCelda);
router.delete('/:id', controller.eliminarCelda);

module.exports = router;

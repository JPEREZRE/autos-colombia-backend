const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController');

router.post('/', controller.crearUsuario);
router.get('/', controller.obtenerUsuarios);
router.get('/:id', controller.obtenerUsuario);
router.put('/:id', controller.actualizarUsuario);
router.delete('/:id', controller.eliminarUsuario);

module.exports = router;

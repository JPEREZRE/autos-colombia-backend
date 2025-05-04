const express = require('express');
const router = express.Router();

// Este es un ejemplo básico de las rutas
router.post('/', (req, res) => {
  res.send('Nueva novedad registrada');
});

router.get('/', (req, res) => {
  res.send('Listado de novedades');
});

router.put('/:id', (req, res) => {
  res.send(`Novedad con id ${req.params.id} actualizada`);
});

router.delete('/:id', (req, res) => {
  res.send(`Novedad con id ${req.params.id} eliminada`);
});

module.exports = router;

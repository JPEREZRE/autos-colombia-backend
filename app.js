const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/vehiculos', require('./routes/vehiculos'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/celdas', require('./routes/celdas'));
app.use('/api/pagos', require('./routes/pagos'));
app.use('/api/novedades', require('./routes/novedades'));


// Servir los archivos estáticos de React
//app.use(express.static(path.join(__dirname, '../autos-colombia-frontend/build')));

// Manejar cualquier ruta y devolver el index.html de React
//app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname, '../autos-colombia-frontend/build', 'index.html'));
//});


mongoose.connect(process.env.MONGO_URI)


.then(() => {
  console.log('✅ Conectado a MongoDB');

  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('❌ Error al conectar a MongoDB:', err);
});





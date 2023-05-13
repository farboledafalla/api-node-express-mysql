// Requerimos el router de express
const rutas = require('express').Router();

// Asignamos la ruta principal
rutas.get('/', function (req, res) {
  res.send('Hola desde rutas/inicio');
})

// Exportar la ruta
module.exports = rutas;

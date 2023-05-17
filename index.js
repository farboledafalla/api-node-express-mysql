require('./config/conexion');

// Incluir express
const express = require('express');

// Definir puerto
const port = (process.env.port || 3000);

// Instancia de express
const app = express();

// Permitir trabajar con formato JSON
app.use(express.json());

// Configurar el puerto
app.set('port', port);

// Pasar las rutas, la ruta base después del puerto 3000 sera '/api'
app.use('/api', require('./rutas'));

// Iniciar express
app.listen(app.get('port'), (error) => {
  if (error) {
    console.log('Error al iniciar el Servidor: ' + error);
  } else {
    console.log('Servidor iniciado en el puerto: ' + port);
  }
})
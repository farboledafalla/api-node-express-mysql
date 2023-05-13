const mysql = require('mysql');
const conexion = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_basico'
  }
)

conexion.connect((err) => {
  if (err) {
    console.log('Error en la conexión a la BD');
  } else {
    console.log('Conexión satisfactoria a la BD');
  }
})

module.exports = conexion;

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1', // Cambia esto si tu contenedor Docker tiene un nombre de host diferente
  port: 3306, // Asegúrate de que este puerto esté mapeado correctamente
  user: 'aleaires',
  password: '44327676',
  database: 'Lascanorepuestos_testing'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;

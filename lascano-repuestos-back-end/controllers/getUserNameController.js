const db = require('../config/db');
const redis = require('redis');
const client = redis.createClient();

const getUserName = (req, res) => {
  const sessionId = req.query.sessionId; // Suponiendo que usas un identificador de sesión para obtener el correo desde Redis

  if (!sessionId) {
    console.error('El identificador de sesión es requerido');
    return res.status(400).json({ error: 'El identificador de sesión es requerido' });
  }

  // Obtener el correo electrónico desde Redis
  client.get(sessionId, (err, email) => {
    if (err) {
      console.error('Error obteniendo el correo electrónico desde Redis:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }

    if (!email) {
      console.warn('Correo electrónico no encontrado en Redis:', { sessionId });
      return res.status(404).json({ error: 'Correo electrónico no encontrado' });
    }

    console.log('Solicitud recibida para obtener nombre de usuario', { email });

    // Consulta SQL para obtener el nombre del usuario por correo electrónico
    const query = 'SELECT Nombre, Apellido FROM usuarios WHERE Email = ?';

    db.query(query, [email], (err, results) => {
      if (err) {
        console.error('Error ejecutando la consulta:', err);
        return res.status(500).json({ error: 'Error en el servidor' });
      }

      if (results.length === 0) {
        console.warn('Usuario no encontrado:', { email });
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Suponiendo que el nombre del usuario se encuentra en la primera fila del resultado
      const { Nombre: nombre, Apellido: apellido } = results[0];
      console.log('Usuario encontrado:', { email, nombre, apellido });
      res.json({ nombre, apellido });
    });
  });
};

module.exports = { getUserName };

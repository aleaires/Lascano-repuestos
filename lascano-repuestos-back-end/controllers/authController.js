const db = require('./config/db');
const redisClient = require('./config/redisClient');

const login = (req, res) => {
  const { email } = req.body;

  // Consulta para verificar si el correo electrónico existe y obtener el nombre y apellido
  const query = 'SELECT Nombre, Apellido FROM Usuarios WHERE Mail = ?';

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }

    if (results.length > 0) {
      // Usuario encontrado
      const user = results[0];
      const userData = { email, name: user.Nombre, lastname: user.Apellido };

      // Guardar datos del usuario en Redis con una expiración de 1 hora
      redisClient.setex(email, 3600, JSON.stringify(userData), (err) => {
        if (err) {
          console.error('Error saving to Redis:', err);
          res.status(500).json({ error: 'Redis error' });
          return;
        }

        res.json({ authenticated: true, user: userData });
      });
    } else {
      // Correo electrónico no encontrado
      res.status(401).json({ authenticated: false, message: 'Correo electrónico no encontrado' });
    }
  });
};

const checkAuth = (req, res) => {
  const { email } = req.query;

  // Verificar si el correo electrónico está en la caché de Redis
  redisClient.get(email, (err, data) => {
    if (err) {
      console.error('Error fetching from Redis:', err);
      res.status(500).json({ error: 'Redis error' });
      return;
    }

    if (data) {
      // Usuario autenticado
      const user = JSON.parse(data);
      res.json({ authenticated: true, user });
    } else {
      // Usuario no autenticado
      res.status(401).json({ authenticated: false, message: 'Usuario no autenticado' });
    }
  });
};

module.exports = {
  login,
  checkAuth,
};

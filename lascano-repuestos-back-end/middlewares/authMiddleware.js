const redisClient = require('../config/redisClient');

const authMiddleware = (req, res, next) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email es requerido' });
  }

  redisClient.get(email, (err, data) => {
    if (err) {
      console.error('Error fetching from Redis:', err);
      return res.status(500).json({ error: 'Redis error' });
    }

    if (data) {
      console.error('Datos: ', data);
      req.user = JSON.parse(data);
      next();
    } else {
      res.status(401).json({ authenticated: false, message: 'Usuario no autenticado' });
    }
  });
};

module.exports = authMiddleware;

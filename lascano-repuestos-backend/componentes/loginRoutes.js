const express = require('express');
const router = express.Router();
const pool = require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/auth/login', async (req, res) => {
  const { email, contraseña } = req.body;

  // Log de entrada para verificar los datos recibidos
  console.log('Login request received:', { email, contraseña });

  try {
    // Consultar el usuario en la base de datos
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    const user = result.rows[0];

    // Log del resultado de la consulta
    console.log('User found in DB:', user);

    if (!user) {
      // Log si el usuario no es encontrado
      console.log('User not found:', email);
      return res.status(400).json({ message: 'User not found' });
    }

    // Comparar la contraseña proporcionada con la almacenada
    const isMatch = await bcrypt.compare(contraseña, user.contraseña);

    // Log del resultado de la comparación de contraseñas
    console.log('Password match result:', isMatch);

    if (!isMatch) {
      // Log si las credenciales son inválidas
      console.log('Invalid credentials for user:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generar el token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Log del token generado
    console.log('JWT token generated:', token);

    // Enviar la respuesta con el token y los detalles del usuario
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    // Log del error si ocurre un problema en la ejecución
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

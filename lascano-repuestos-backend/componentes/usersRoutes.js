const express = require('express');
const router = express.Router();
const pool = require('./db');

// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener usuarios con rol "admin"
router.get('/usuarios/admin', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE rol = $1', ['admin']);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

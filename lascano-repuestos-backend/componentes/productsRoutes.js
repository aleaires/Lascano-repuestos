const express = require('express');
const router = express.Router();
const pool = require('./db');

// Ruta para obtener todos los usuarios
// Ruta para obtener productos filtrados por nombre
router.get('/productos', async (req, res) => {
    try {
      // Obtiene el parámetro de consulta 'nombre' de la URL
      const { nombre } = req.query;
      const { id } = req.query;
      
      // Si no se proporciona un nombre, devuelve todos los productos
      if (!nombre && !id) {
        const result = await pool.query('SELECT p.*, pi.image_url FROM productos p LEFT JOIN product_images pi ON p.id = pi.product_id');
        return res.json(result.rows);
      }

      if (id && !nombre){
          const result = await pool.query('SELECT p.*, pi.image_url FROM productos p LEFT JOIN product_images pi ON p.id = pi.product_id WHERE p.id = $1', [id]);
          res.json(result.rows);
        
      }
  
      // Si se proporciona un nombre, filtra los productos por nombre
      if(nombre && !id){
          const result = await pool.query('SELECT p.*, pi.image_url FROM productos p LEFT JOIN product_images pi ON p.id = pi.product_id WHERE p.nombre = $1', [nombre]);
          res.json(result.rows);
        } 

      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
  });

// Ruta para agregar una imagen a un producto
router.post('/productos/:id/imagenes', async (req, res) => {
  try {
    const { id } = req.params;
    const { imageUrl } = req.body;

        // Log para depuración
        console.log('ID:', id);
        console.log('Body:', req.body);

    // Validar que imageUrl está presente
    if (!imageUrl) {
      return res.status(400).send('imageUrl is required');
    }
    
    const result = await pool.query(
      'INSERT INTO product_images (product_id, image_url) VALUES ($1, $2) RETURNING *',
      [id, imageUrl]
    );
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener imágenes de un producto
router.get('/productos/:id/imagenes', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query(
      'SELECT * FROM product_images WHERE product_id = $1',
      [id]
    );
    
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
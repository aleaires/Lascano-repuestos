const pool = require('./db');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const createUser = async () => {
  const username = "pepe";
  const email = 'pepe@pepe.com';
  const password = 'pasw123';
  const nombre = "pepe";
  const apellido = "rodriguez";
  const rol = "admin";

  // Hashear la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('User from DB:', username);
    console.log('Stored hashed password:', hashedPassword);

  try {
    // Insertar el nuevo usuario en la base de datos
    await pool.query(
      'INSERT INTO usuarios (username, email, contraseña) VALUES ($1, $2, $3)',
      [username, email, hashedPassword]
    );
    console.log('User created');
  } catch (err) {
    console.error('Error creating user:', err);
  } finally {
    pool.end();
  }
};

createUser();

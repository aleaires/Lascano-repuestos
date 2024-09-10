const pool = require('./db');
const dotenv = require('dotenv');

dotenv.config();

const testConnection = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Connection successful');
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    pool.end();
  }
};

testConnection();

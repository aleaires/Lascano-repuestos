const express = require('express');
const usersRoutes = require('./componentes/usersRoutes'); // Importa el archivo de rutas de usuarios
const productsRoutes = require('./componentes/productsRoutes');
const loginRoutes = require('./componentes/loginRoutes');
const cors = require('cors');

const app = express();
const port = 3001;

// Permitir todas las solicitudes CORS
app.use(cors());


// Middleware para parsear JSON
app.use(express.json());


// Usa las rutas de usuarios
app.use('/api', usersRoutes); // Define el prefijo para las rutas de usuarios

app.use('/api', productsRoutes);

app.use('/api', loginRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

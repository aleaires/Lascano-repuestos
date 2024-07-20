const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const { getUserName } = require('./controllers/getUserNameController');

// Inicializa el SDK de Firebase Admin con tu archivo de clave privada
const serviceAccount = require('./lascano-repuestos-firebase-adminsdk-vy70d-7fbf5b45a8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/api/getUserName', getUserName);

// Endpoint para loguear y actualizar la base de datos
app.post('/login', async (req, res) => {
  const { uid, email } = req.body;

  try {
    // Crea o actualiza la entrada del usuario en Firestore
    await db.collection('users').doc(uid).set({
      email: email,
      lastLogin: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    // Obtén los datos del usuario después de la actualización
    const userDoc = await db.collection('users').doc(uid).get();
    const userData = userDoc.data();

    res.status(200).send({ message: 'Login successful and user data updated', user: userData });
  } catch (error) {
    res.status(500).send('Error updating user data: ' + error.message);
  }
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

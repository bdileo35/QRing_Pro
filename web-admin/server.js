const express = require('express');
const app = express();
const PORT = 4000;
const admin = require('firebase-admin');

// Inicializar Firebase Admin SDK
const serviceAccount = require('./firebaseConfig.json'); // Archivo descargado desde Firebase Console
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<tu-proyecto>.firebaseio.com', // Reemplaza con tu URL
});

const db = admin.firestore(); // Conexión a Firestore

// Datos de prueba
const registros = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, nombre: 'María López', email: 'maria@example.com' },
  { id: 3, nombre: 'Carlos García', email: 'carlos@example.com' },
];

// Endpoint para obtener los registros
app.use('/images', express.static('pages/images'));
app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Servidor</title>
        </head>
        <body>
          <h1>Bienvenido al servidor</h1>
          <img src="/images/logo.png" alt="Logo" style="width:200px;height:auto;">
          <p>Visita <a href="/api/registros">/api/registros</a> para ver los datos.</p>
          <p>Este es un ejemplo de contenido HTML más elaborado.</p>
        </body>
      </html>
    `);
});
app.get('/api/registros', async (req, res) => {
    try {
      // Obtener los documentos de la colección "Usuarios"
      const snapshot = await db.collection('usuarios').get();
  
      // Mapear los documentos a un array de objetos
      const registros = snapshot.docs.map(doc => ({
        id: doc.id, // ID del documento
        ...doc.data() // Datos del documento
      }));
  
      // Enviar los registros como respuesta
      res.json(registros);
    } catch (error) {
      console.error('Error al obtener los registros:', error);
      res.status(500).send('Error al obtener los registros');
    }
  });

// Iniciar el servidor
console.log('Iniciando el servidor...');
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
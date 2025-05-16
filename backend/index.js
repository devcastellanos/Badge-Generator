const express = require('express');
const cors = require('cors');
const { getPersonal } = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/personal', async (req, res) => {
  try {
    const data = await getPersonal();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar la base de datos.' });
  }
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

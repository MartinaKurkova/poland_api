const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors()); // Povolit přístup z frontendu

// Slouží složku s obrázky
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Endpoint pro výlety
app.get('/trips', (req, res) => {
  const filePath = path.join(__dirname, 'api', 'trips.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Nepodařilo se načíst trips.json' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server běží na http://localhost:${PORT}`);
});

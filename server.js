const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Servíruje složku assets (fotky)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Endpoint pro trips s prefixem /api
app.get('/api/trips', (req, res) => {
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

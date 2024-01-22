
const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname,)));

app.get('/api/fortunes', (req, res) => {
  try {
    const fortunes = require('./wrozby.json').fortunes;
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    res.json({ fortune });
  } catch (error) {
    console.error('Błąd serwera:', error);
    res.status(500).json({ error: 'Wystąpił błąd serwera.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});

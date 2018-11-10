const express = require('express');
const os = require('os');
const path = require('path');

const db = require('./database');

const data = db.initDatabase();

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/prices/rice', (req, res) => {
  res.send(data.ricePrices);
});

app.get('/api/prices/wheat', (req, res) => {
  res.send(data.wheatPrices);
});

app.get('/api/prices/maize', (req, res) => {
  res.send(data.maizePrices);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}`, '..', '..', 'dist/index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));

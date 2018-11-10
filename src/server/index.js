const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}`, '..', '..', 'dist/index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));

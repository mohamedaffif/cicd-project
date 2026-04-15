const express = require('express');
const app = express();

app.get('/', (req, res) => {
  

  res.send('it works on my machine');
});

module.exports = app;

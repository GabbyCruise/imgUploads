const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.send('This is the homepage where images will be captured for upload');
});


module.exports = route;

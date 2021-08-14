const express = require('express');
const router = express();

const StyleDictionary = require('../index.js');


// respond with "hello world" when a GET request is made to the homepage
router.get('/', function(req, res) {
  StyleDictionary.buildAllPlatforms();
  res.send('hello world');
});

module.exports = router;
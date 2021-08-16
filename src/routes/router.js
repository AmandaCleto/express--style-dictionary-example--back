const express = require('express');
const app = express();
const router = express();
const path = require('path');

const StyleDictionary = require('../config.js');

const folderScss = path.resolve( __dirname, "..", "build", "scss");
const filePath = `${folderScss}/_variables.scss`;

router.get('/design-token/scss', function (req, res) {
    StyleDictionary.buildAllPlatforms();
    res.sendFile(filePath);
})

module.exports = router;
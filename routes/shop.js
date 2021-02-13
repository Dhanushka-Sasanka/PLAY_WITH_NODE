const express = require('express');
const path = require('path');
const baseDir = require('../util/baseDir');

const route = express.Router();

route.get('/', (req, res, next) => {
    console.log("DEFAULT PATH");
    res.sendFile(path.join(baseDir ,'views','shop.html' ))
    // next(); //going to next line of route 

});


module.exports = route;
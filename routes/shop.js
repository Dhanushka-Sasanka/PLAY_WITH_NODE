const express = require('express');
const path = require('path');

const route = express.Router();

route.get('/', (req, res, next) => {
    console.log("DEFAULT PATH");
    res.sendFile(path.join( __dirname,'../','views','shop.html' ))
    // next(); //going to next line of route 

});


module.exports = route;
const express = require('express');

const route = express.Router();

route.get('/', (req, res, next) => {
    console.log("DEFAULT PATH");
    res.send("<html><head><body><h1>I AM NODE JS SERVER WITH EXPRESS JS...path = /</h2></body></head></html>")
    next(); //going to next line of route 

});


module.exports = route;
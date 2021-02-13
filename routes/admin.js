
const express = require('express');
const path = require('path');

const route = express.Router();


route.get('/add-customer', (req, res, next) => {
    console.log("route 2");
    res.sendFile(path.join(__dirname , '../' , 'views','add-customer.html'));

});

route.post('/customer', (req, res, next) => {
    console.log(req.body);
    res.send(req.body);

});



module.exports = route;


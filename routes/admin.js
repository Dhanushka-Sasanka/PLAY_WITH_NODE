const { response } = require("express");

const express = require('express');

const routes = express.Router();


routes.get('/add-customer', (req, res, next) => {
    console.log("route 2");
    res.send(`<html>
        <head><body>
                <form action="/customer" method="POST">
                    <input type="text" name="customerName" />
                    <button type="submit">ADD CUSTOMER</button>
                </form>
            </body>
        </head>
    </html>`);

});

routes.post('/customer', (req, res, next) => {
    console.log(req.body);
    res.send(req.body);

});



module.exports = routes;


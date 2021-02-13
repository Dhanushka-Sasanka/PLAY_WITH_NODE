
const experss = require('express');

const app = experss();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extends:false}));

app.use('/add-customer', (req, res, next) => {
    console.log("route 2");
    res.send(`<html>
        <head><body>
                <form action="/customer" method="POST">
                    <input type="text" name="product" />
                    <button type="submit">ADD CUSTOMER</button>
                </form>
            </body>
        </head>
    </html>`);

});

app.use('/customer', (req, res, next) => {
    console.log(req.body);
    res.send(req.body);

});

app.use('/', (req, res, next) => {
    console.log("DEFAULT PATH");
    res.send("<html><head><body><h1>I AM NODE JS SERVER WITH EXPRESS JS...path = /</h2></body></head></html>")
    next(); //going to next line of route 

});

app.listen(3000);

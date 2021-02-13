const experss = require('express');
const app = experss();
const bodyParser = require('body-parser');

// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extends:false}));
// app.use(bodyParser.urlencoded({extends:false}));

app.use(adminRoutes);
app.use(shopRoutes);

// adding 404 ERROR PAGE 
app.use((req, res , next)=>{
    res.status(404).send("<h1>YOU ARE LOST YOUR PATH...!</h1>");
});

app.listen(3000);

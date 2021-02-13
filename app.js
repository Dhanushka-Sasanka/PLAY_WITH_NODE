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


app.listen(3000);

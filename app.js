const experss = require('express');
const app = experss();
const bodyParser = require('body-parser');
const path = require('path');

// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extends:false}));
// app.use(bodyParser.urlencoded({extends:false}));
app.use(experss.static(path.join(__dirname, './public')));

app.use(adminRoutes);
app.use(shopRoutes);

// adding 404 ERROR PAGE 
app.use((req, res , next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'));;
});

app.listen(3000,()=>{
    console.log("NODE SERVER STARTING ON 3000");
});

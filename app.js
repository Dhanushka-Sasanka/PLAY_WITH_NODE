
const experss = require('express');

const app = experss();



app.use('/add-customer',(req , res , next) =>{
    console.log("route 2");
    res.send("<html><head><body><h1>I AM NODE JS SERVER WITH EXPRESS JS...</h2></body></head></html>")
    
});

app.use('/',(req , res , next) =>{
    console.log("DEFAULT PATH");
    res.send("<html><head><body><h1>I AM NODE JS SERVER WITH EXPRESS JS...path = /</h2></body></head></html>")
    next(); //going to next line of route 

});
app.listen(3000);

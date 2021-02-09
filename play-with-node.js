
// const fileSystem = require('fs');
const http = require('http');
const reqListener = require('./routes');


// accessing file System 
// ===========================
/*

const fileSystem = require('fs');
fileSystem.writeFileSync('hello_Node.txt', "This content Written By Mr.Dhanushka with Node JS File System..");

*/

//creating server 
//===========================

// function reqListener(req , res){
//     console.log(req);
// }
// const server= http.createServer(reqListener);
// server.listen(3000);

const server= http.createServer(reqListener.requestHandler);

console.log(reqListener.somethingText);

server.listen(3000 ,()=>{
    console.log("Server is running at port 3000..."); 
});




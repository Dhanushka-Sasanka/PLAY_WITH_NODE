
const fileSystem = require('fs');

const requestHandler = (req, res) => {
    // console.log(req.url , req.method , req.headers );

    const requestMethod = req.method;
    const requestURL = req.url;

    if (requestURL === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>This content comes from Node JS Server...!</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (requestURL === '/messege') {
        res.setHeader('Content-Type', 'text/html');

        if (requestMethod === 'POST') {
            // res.setHeader('Location','/');
            // res.statusCode=302;
            // fileSystem.writeFileSync('message.txt', "THIS IS DUMMY DATA....!");

            const body = [];
            req.on('data', (chank) => {
                body.push(chank);
                console.log(chank);
            });

            return req.on('end', () => {
                const prasedBody = Buffer.concat(body).toString();
                console.log(prasedBody);
                const messege = prasedBody.split('=')[1];
                fileSystem.writeFileSync('messegeFromRequest.txt', messege);
                res.setHeader('Location', '/');
                res.statusCode = 302;
                return res.end();
            });


        }

        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>This is the time to send a message to server...!</h1>');
        res.write('');
        res.write('<form action="/messege" method="POST"><input type="text" name="messege"/><button type="submit">SEND MSG</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>I AM NOT ROOT...!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();


    // process.exit();          //terminate server by force/
}
const somethingText = "Hello I am Some text...."
// Ways to export a Module In NODE 

// 1st
// module.exports = requestHandler; 


//2nd
// module.exports.requestHandler = requestHandler; 
// module.exports.somethingText = "Hello Node , I AM NEW BEA.. 2"; 

// 3rd
// module.exports = {
//     "requestHandler":requestHandler,
//     "somethingText": "Hello Node , I AM NEW BEA.. 3" 
// }

//4th 
// shortcut in NODE 
 exports.requestHandler = requestHandler;
 exports.somethingText = "Hello Node , I AM NEW BEA.. 4";




 
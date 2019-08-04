const express = require('express');
const http = require('http');
const app = express();

const hostname = 'localhost';
const port = 3000;

app.use( (req,res,next) =>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Welcome .....<br></br>express server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
});
const express = require('express');
const http = require('http');
const app = express();
const morgan = require('morgan');

const hostname = 'localhost';

const port = 3000;
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
//this is something cool .....now i can response a static file...

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
});
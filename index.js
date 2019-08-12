const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const studentRouter = require('./routes/studentRouter');

const hostname = 'localhost';
const port = 4000;
app.use(morgan('combined'));

app.use(bodyParser.json());

app.use('/student',studentRouter);

app.use('/student/:studentId',studentRouter);
 

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
});

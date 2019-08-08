const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const hostname = 'localhost';
const port = 4000;
let data= [];
//app.use(express.json);
//app.use(express.urlencoded({extended}))
app.use(morgan('combined'));
app.use(bodyParser.json());
app.all('/student', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/student', (req,res,send) =>{
    if(data.length !== 0){
        data.forEach(element => {
            res.write(element.name + " " + element.age+'\n');
        });
        res.end();
    }
    else{
        res.statusCode = 403;
        res.end('There is no student in the database');
    }
});

app.post('/student', (req,res,next) => {
    data.push(req.body);
    res.end('the data is added successfully');
});

app.put('/student', (req,res,next) => {
    res.statusCode  = 403;
    res.end(`Invalid request ${req.method} method`);
});

app.put('/student/:studentId', (req,res,next) => {
    if(data.length > parseInt(req.params.studentId) )  {
        data[parseInt(req.params.studentId)] = req.body;
        res.end(`the following data is updated ${data[parseInt(req.params.studentId)].name} ${data[parseInt(req.params.studentId)].age}`);
    }
    else{
        res.statusCode = 403;
        res.end('the following data do not exist');
    } 
});

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
});

const express  = require('express');
const bodyParser = require('body-parser');
const studentRouter = express.Router();

const kitchen = require('lib/kitchen.js');

const localdb  = new kitchen();

studentRouter.use(bodyParser.json());

studentRouter.route('/')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get( (req,res,send) =>{
    localdb.queryAll().forEach( (ele) => {
        res.write(JSON.stringify(ele)+ '\n');
    });
    res.end();
})
.post( (req,res,next) => {
    localdb.insert(req.body);
    res.end(`the following data is added successfully`);
})
.put( (req,res,next) => {
    res.statusCode  = 403;
    res.end(`Invalid request ${req.method} method`);
})
.delete( (req,res,next) => {
    localdb.removeAll();
    res.end('All the data is removed from database');
});

studentRouter.route('/:studentId')
.all( (req,res,next) =>{
    res.statusCode  = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end(JSON.stringify(localdb.query(req.params.studentId)));
})
.post( (req,res,next) => {
    res.statusCode  = 403;
    res.end(`Invalid request ${req.method} method`);
})
.put( (req,res,next) => {
    localdb.update(req.body);
    res.end('the following is upadated');
})
.delete( (req,res,next) => {
    localdb.remove(req.params.studentId);
    res.end('the following data is removed....');
});









module.exports  = studentRouter;
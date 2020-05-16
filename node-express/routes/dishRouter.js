const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router();

dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + 'with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all the dishes!');
})

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send '+ req.params.dishId + ' to you!');
})
.post((req, res, next) => {
    res,statusCode = 403
    res.end('Sorry, post method not available on ' + req.params.dishId + '\n');
})
.put((req, res, next) => {
    res.write('Updating dish: ' + req.params.dishId + '\n')
    res.end('Will update the dish: ' + req.body.name + ' with description: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting dish number' + req.params.dishId + '\n');
})

module.exports = dishRouter


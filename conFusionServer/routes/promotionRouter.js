const express = require('express')
const bodyParser = require('body-parser')

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json())

promotionRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + 'with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all the promotions!');
})

promotionRouter.route('/:promotionId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send '+ req.params.promotionId + ' to you!');
})
.post((req, res, next) => {
    res,statusCode = 403
    res.end('Sorry, post method not available on ' + req.params.promotionId + '\n');
})
.put((req, res, next) => {
    res.write('Updating promotionId: ' + req.params.promotionId + '\n')
    res.end('Will update the promotionId: ' + req.body.name + ' with description: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotionId number' + req.params.promotionId + '\n');
})

module.exports = promotionRouter


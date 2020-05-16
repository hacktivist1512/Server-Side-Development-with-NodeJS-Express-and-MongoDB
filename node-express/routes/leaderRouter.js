const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + 'with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all the leaders!');
})

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send '+ req.params.leaderId + ' to you!');
})
.post((req, res, next) => {
    res,statusCode = 403
    res.end('Sorry, post method not available on ' + req.params.leaderId + '\n');
})
.put((req, res, next) => {
    res.write('Updating leader: ' + req.params.leaderId + '\n')
    res.end('Will update the leader: ' + req.body.name + ' with description: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader number' + req.params.leaderId + '\n');
})

module.exports = leaderRouter


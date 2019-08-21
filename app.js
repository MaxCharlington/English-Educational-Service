const 
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressLogging = require('express-logging'),
    logger = require('logops'),
    compression = require('compression')

//const database = require('./database.js');

//Middleware
app.use(compression({ level: 9}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressLogging(logger))
app.use('/public', express.static('public'))

//Request handlers
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html", req.cookies)
})
app.get('/videos/:name', function (req, res) {
    res.sendFile(__dirname + "/videos/" + req.params.name, req.cookies)
})

app.post('/', function (req, res) {
    console.log(req.body)
})

//Start server
app.listen(3000, function (err) {
    console.log(`Server started`)
})
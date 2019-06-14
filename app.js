const 
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressLogging = require('express-logging'),
    logger = require('logops');

//const database = require('./database.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressLogging(logger));
app.use('/public', express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html", req.cookies);
});

app.post('/', function (req, res) {
    console.log(req.body)
});


app.listen(3000, function (err) {
    console.log(`Server started`);
});
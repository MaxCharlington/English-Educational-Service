const 
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressLogging = require('express-logging'),
    logger = require('logops'),
    compression = require('compression'),
    MongoClient = require('mongodb').MongoClient;

// Connection URL to MongoDB
const url = 'mongodb://localhost:27017';

// Use connect method to connect to the server
(async function () {
    let client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
    db = client.db('app');
})()

//const database = require('./database.js');

//Middleware
app.use(compression({ level: 9}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressLogging(logger))
app.use('/public', express.static('public'))

//Request handlers

//For students
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html", req.cookies)
})

app.get('/course', function (req, res) {
    //console.log(req.query.num + ' ' + req.query.name);
    res.send(JSON.stringify([
            { url: 'http://localhost:3000/public/videos/1.mp4' },
            { quest: 'Как дела?', ans: ['Нормально', 'Хорошо', 'Отлично', 'Прекрасно'], rightNums: [2, 3] },
            { quest: 'Как дела? Но это будет пример огромнрого вороса с пояснениями и огромным количеством "необходимой" информации, которая нужна просто чтобы мне было неудобно верстать такой вопрос, а больше в общем то ни для чего. Но на самом деле она может и не такая бесполезная, так как возможно прямо в вопросе содержится часть ответа', ans: ['Норм', 'Хорошо', 'Отлично', 'Прекрасно'], rightNums: [2, 3] },
            { }//As Result
        ])
    )
})

app.get('/current', function (req, res) {
    res.send(JSON.stringify({current: 0}))
})

app.get('/result', function (req, res) {
    res.send(JSON.stringify({result: '80%'}))
})

//For teachers
app.get('/results', function (req, res) {
    res.send('This feature is not ready')
})

app.get('/creation', function (req, res) {
    res.send('This feature is not ready')
})


//Start server
app.listen(3000, function (err) {
    console.log(`Server started`)
})
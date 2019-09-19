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
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html", req.cookies)
})

app.post('/', function (req, res) {
    console.log(req.body)
})

app.get('/result', function (req, res) {
    res.send('{"result": "80%"}')
})

app.get('/course', function (req, res) {
    res.send(JSON.stringify([
            { url: 'http://localhost:3000/public/videos/1.mp4' },
            { quest: 'Как дела?', ans: ['Нормально', 'Хорошо', 'Отлично', 'Прекрасно'], rightNums: [2, 3] },
            { quest: 'Как дела? Но это будет пример огромнрого вороса с пояснениями и огромным количеством "необходимой" информации, которая нужна просто чтобы мне было неудобно верстать такой вопрос, а больше в общем то ни для чего. Но на самом деле она может и не такая бесполезная, так как возможно прямо в вопросе содержится часть ответа', ans: ['Норм', 'Хорошо', 'Отлично', 'Прекрасно'], rightNums: [2, 3] },
            { }//As Result
        ])
    )
}) 

//Start server
app.listen(3000, function (err) {
    console.log(`Server started`)
})
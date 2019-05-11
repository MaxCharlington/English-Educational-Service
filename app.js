const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/public', express.static('public'));


app.get('/', function (req, res) {
    res.render('./index.ejs', req.cookies);
});

app.listen(3000, function (err) {
    console.log(`Server started`);
});
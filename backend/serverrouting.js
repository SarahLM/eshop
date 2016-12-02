
var express = require('express'),
authentication = require('express-authentication'),
basicAuth = require('basic-auth'),
app = express();

var nodemailer = require('nodemailer');

var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//require('dotenv').config();




app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, 'static')));
//var app = express();

//var pgp = require("pg-promise")(/*options*/);
//var db = pgp("postgres://postgres@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");

var registrierung = require('./registrierung.js')
var auth = require('./auth.js')
var authe = require('./authe.js')
var mailerConfig = require('./mailerConfig.js')


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hallo hier ist das Backend');
});

app.get('/home', function(req, res) {
  res.sendfile('static/index.html');
});


 app.get('/registrierung/:id/:nutzer/:password', registrierung.registrierung);

 //app.post('/Mail', handlerMail.registerCustomer);
 app.get('/SendMail', mailerConfig.sendingMail);

 app.get('/auth', auth.api);

 app.get('/authe',authe.authe);

var server = app.listen(8080, function() {})
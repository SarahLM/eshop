
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//require('dotenv').config();



var app = express();



//app.use(express.static(path.join(__dirname, 'static')));
//var app = express();

//var pgp = require("pg-promise")(/*options*/);
//var db = pgp("postgres://postgres@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");

var datenbank = require('./datenbank.js')
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hallo hier ist das Backend');
});

app.get('/home', function(req, res) {
  res.sendfile('static/index.html');
});


 app.get('/datenbank', datenbank.datenbanktest)

var server = app.listen(8080, function() {})
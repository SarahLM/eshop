
var express = require('express'),
authentication = require('express-authentication'),
basicAuth = require('basic-auth'),
app = express();

var nodemailer = require('nodemailer');
var path = require('path');
var bodyParser = require('body-parser');



app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



var registrierung = require('./registrierung.js')
var auth = require('./auth.js')
var putArticle = require('./putArticle.js')
var getSingleArticle = require('./getArticles.js')
//var authe = require('./authe.js')
var mailerConfig = require('./mailerConfig.js')
var kontaktformular = require('./kontaktformular.js')
var getArticles = require('./getArticles.js')
var login = require ('./login.js')

//Authentifizierung ...
//app.post('/authenticate', Authentifizierung.authentifizieren);



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hallo hier ist das Backend');
});

app.get('/home', function(req, res) {
  res.sendfile('static/index.html');
});
 // app.post('/putArticle/:id/:name/:color/:category/:subcategory/:beschreibung/:preis/:vorrat',putArticle.putArticle);

 app.post('/putArticle',putArticle.putArticle);

 app.delete('/deleteArticle/:id',putArticle.deleteArticle);

 app.get('/subcategory/:subcategory',getArticles.getArticlesfromSubCategory);
 
 app.get('/subcategory/:color',getArticles.getArticlesfromSubCategory);

  app.get('/color/:color',getArticles.getArticlesByColor);

 app.get('/searchArticle/:category/:userinput',getArticles.searchArticlesDashboard);

  app.get('/searchArticle/:userinput',getArticles.searchArticlesMainPage);

  app.get('/getSingleArticle/:id',getArticles.getSingleArticle);

  app.get('/getNeuheiten',getArticles.getNeuheiten);

  app.get('/getSale',getArticles.getSale);

  app.get('/getTopProducts',getArticles.getTopProducts);

  app.put('/update',putArticle.updateArticle);

 app.get('/category/:category',getArticles.getArticlesfromCategory);
 
 app.get('/login/:username/:password',login.login);

 app.get('/registrierung/:id/:email/:password', registrierung.registrierung);

 //gibt einen Array mit Json-Objekten aller Artikel zurück
 app.get('/allArticles', getArticles.getArticles);

 //app.post('/Mail', handlerMail.registerCustomer);
 app.get('/SendMail/:nutzer', mailerConfig.sendingMail);

 app.get('/kontaktformular/:nutzer', kontaktformular.sendingKontaktformular);

 app.get('/auth', auth.api);

// app.get('/authe',authe.authe);

var server = app.listen(8080, function() {})
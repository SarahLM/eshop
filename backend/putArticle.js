var express = require('express');
var app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");


/*function putArticle(req, res, next) {
  db.any("INSERT into Article (id, name, color, category, subcategory, info, price)VALUES ('"+req.params.id+"','"+req.params.name+"','"+req.params.color+"','"+req.params.category+"','"+req.params.subcategory+"','"+req.params.beschreibung+"',"+req.params.preis+");")
    .then(function (data) {
      res.status(200)
        .json({
          
          data
        });
    })
    .catch(function (err) {
      return next(err);
    });
}*/
function deleteArticle(req, res, next) {
  db.any("select deleteArticle("+req.params.id+")")
    .then(function (data) {
      res.status(200)
        .json({
          
          data
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function putArticle(req, res, next) {

  var sql = "SELECT newArticle( " +
              req.body.productid + ",'" +
              req.body.productname + "','" +
              req.body.color + "','" +
              req.body.kategorie + "','" +
              req.body.subkategorie + "','" +
              req.body.beschreibung + "'," +
              req.body.preis + "," +
              req.body.anzahl + ");"

  db.any(sql)
      .then(function (data) {
      res.status(200)
        .json({
          
          data
        });
    })
    .catch(function (err) {
      return next(err);
    });
  
}

module.exports = {
  putArticle : putArticle,
  deleteArticle : deleteArticle
}
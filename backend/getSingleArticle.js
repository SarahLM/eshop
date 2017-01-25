var express = require('express');
var app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");


function getSingleArticle(req, res, next) {
  db.any('SELECT'+ req.params.id+', code, name FROM Events')
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
	getSingleArticle: getSingleArticle
}

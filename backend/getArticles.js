var express = require('express');
var app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");


function getArticles(req, res, next) {
  db.any('SELECT * from Article;')
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

function getSingleArticle(req, res, next) {
  db.any("SELECT * from Article where id="+req.params.id+";")
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

function getArticlesfromCategory(req,res,next){


db.any("SELECT * from Article where category='"+req.params.category+"';")
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


function getArticlesfromSubCategory(req,res,next){


db.any("SELECT * from Article where subcategory='"+req.params.subcategory+"';")
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

// Um im Dashboard einen Artikel nach Kategorie und mit Inputfeld zu suchen
function searchArticlesDashboard(req,res,next){

  db.any("SELECT * FROM article WHERE category='"+req.params.category+"' AND name LIKE '%"+req.params.userinput+"%';")
      .then(function(data){
        res.status(200)
          .json({
            data
          });
      })
      .catch(function(err){
        return next(err);
      });
}


//Für später Artikel einpflegen ein Post-Beispiel:
/*function createPuppy(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into pups(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}*/


module.exports = {
	getArticles: getArticles,
  getArticlesfromCategory : getArticlesfromCategory,
  getArticlesfromSubCategory : getArticlesfromSubCategory,
  getSingleArticle : getSingleArticle,
  searchArticlesDashboard : searchArticlesDashboard
}

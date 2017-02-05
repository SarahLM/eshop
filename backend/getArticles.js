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

function getArticlesByColor(req,res,next){

db.any("SELECT * FROM Article WHERE color='"+req.params.color+"';")
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

//Um aufder Hauptseite mit Inputfield nach Produkten zu suchen
function searchArticlesMainPage(req,res,next){

  db.any("SELECT * FROM article WHERE name LIKE '%"+req.params.userinput+"%';")
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


function getNeuheiten(req,res,next){

  db.any("SELECT * FROM article WHERE id=5 OR id=29 OR id=34;")
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

function getSale(req,res,next){

  db.any("SELECT * FROM article WHERE color='blau' OR color='grün';")
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


function getTopProducts(req,res,next){

  db.any("SELECT * FROM article WHERE id=8 OR id=11 OR id=10 OR id=25 OR id=29 OR id=20 OR id=41 OR id=45 OR id=34;")
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





module.exports = {
	getArticles: getArticles,
  getArticlesfromCategory : getArticlesfromCategory,
  getArticlesfromSubCategory : getArticlesfromSubCategory,
  getArticlesByColor : getArticlesByColor,
  getSingleArticle : getSingleArticle,
  searchArticlesDashboard : searchArticlesDashboard,
  searchArticlesMainPage : searchArticlesMainPage,
  getNeuheiten : getNeuheiten,
  getSale : getSale,
  getTopProducts : getTopProducts
}

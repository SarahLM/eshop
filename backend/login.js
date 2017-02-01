var express = require('express');
var app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");

function login(req,res){
	
     db.any("SELECT login('"+req.params.username+"','"+req.params.password+"');").then(function(status) {
        // success;
        console.log(status[0].login);
        if (status[0].login){
        //db.none("INSERT INTO employee(name,password) VALUES($1,$2)",[req.params.email,req.params.password])
        res.status(200).send('erfolgreich eingeloggt');
        console.log('gültig');
        console.log(req);
    }
        else res.send("ungültig");
    }).catch(function (error) {
        // error;
        console.log('error:', error);
    });

    

}

module.exports = {
	login: login
}
//module.exports = db;
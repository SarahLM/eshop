var express = require('express');
var app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");

function registrierung(req,res){
	
     db.any("SELECT auth("+req.params.id+");").then(function (status) {
        // success;
        console.log(status[0].auth);
        if (status[0].auth){
        db.none("INSERT INTO employee(name,password) VALUES($1,$2)",[req.params.nutzer,req.params.password])
        console.log('daten drin');
        res.status(200).send('Benutzer registriert');
        console.log('daten drin');
    }
        else res.send("Code wurde bereits verwendet");
    }).catch(function (error) {
        // error;
        console.log('error:', error);
    });

    //if (req.params.id == 'ja')

   /* if (reg == true){
	//query('INSERT INTO article("name","category") VALUES("dasisteintest","test")');
	//db.any("select $1 from article", [true])
	db.none("INSERT INTO employee(name,password) VALUES($1,$2)",[req.params.nutzer,req.params.password])
        .then(function () {
        // success;
        console.log('daten drin');
        res.status(200).send('eingetragen');
    })
    .catch(function (error) {
        // error;
        console.log('error:', error);
    });
}
else res.send("nee");*/

}

module.exports = {
	registrierung: registrierung
}
//module.exports = db;
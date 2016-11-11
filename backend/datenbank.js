var express = require('express');
var app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");

function datenbanktest(){
	
	//query('INSERT INTO article("name","category") VALUES("dasisteintest","test")');
	//db.any("select $1 from article", [true])
	db.none("INSERT INTO article(name,category) VALUES($1,$2)",['test','stifte'])
    .then(function () {
        // success;
        console.log('daten drin');
    })
    .catch(function (error) {
        // error;
        console.log('error:', error);
    });
	console.log('irgendwas');
}
//=> INSERT INTO "Table Name"("Column Name") VALUES(...)

	/*db.none("INSERT INTO article(name,category) VALUES($1,$2)",['testname','stifte'])
    .then(function (data) {
        // success;
        console.log('data:', data.value);
    })
    .catch(function (error) {
        // error;
        console.log('error:', error);
    });
	console.log('irgendwas');
}*/
// A mixed example for a dynamic column list:
module.exports = {
	datenbanktest: datenbanktest
}
//module.exports = db;
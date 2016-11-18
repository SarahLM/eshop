var express = require('express');
var app = express();
var fs = require("fs");

app.get('/test', function (req, res) {
   fs.readFile( __dirname + "/tests/" + "test.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

app.get('/', function(req, res) {
  res.send('hallo hier ist das Backend');
});



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Test app listening at http://%s:%s", host, port)

})


var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var models = require('./src/model');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

/*
models.wine.findAll({
  raw:true,
  include : [{model: models.winery}]
})
.then(function(wines){
  console.log(wines);
})
*/

app.get('/', function(req, res){
  res.send("Hello World");
});
//app.use(express.bodyParser());
var wine_routes = require('./src/routes/wine-routes')(express, app);
var winery_routes = require('./src/routes/winery-routes')(express, app);


app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});

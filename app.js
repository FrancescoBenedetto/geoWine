var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var models = require('./src/model');



models.wine.findAll({
  raw:true,
  include : [{model: models.winery}]
})
.then(function(wines){
  console.log(wines);
})


app.get('/', function(req, res){
  res.send("Hello World");
});
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});

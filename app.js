var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var WineryDAO = require('./src/persistence/DAOModel.js').WineryDAO;
var WineDAO = require('./src/persistence/DAOModel.js').WineDAO;
var Winery2WineDAO = require('./src/persistence/DAOModel.js').Winry2WineDAO;
var connection = require('./src/persistence/Connection.js').connection;


WineryDAO.findAll({raw:true, include:[{model:WineDAO}]})
  .then(function(res){
    console.log(res);
  });

app.get('/', function(req, res){
  res.send("Hello World");
});
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});

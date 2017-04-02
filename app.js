var express = require('express');
var app = express();
var Connection = require('./src/persistence/Connection.js');
var WineryDAOFactory = require('./src/persistence/Winery.js');
var Sequelize = require('sequelize');


var conn = new Connection();
conn.testConnection();
//get all Wineries
var WineryDAO = WineryDAOFactory(conn.getConnection(), Sequelize);
WineryDAO.findAll({raw:true}).then(function(wineries){
  console.log(wineries);
});



app.get('/', function(req, res){
  res.send("Hello World");
});
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});

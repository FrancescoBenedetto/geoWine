var express = require('express');
var app = express();
var mongoose = require('mongoose');
var assert = require('assert');
var Connection = require('./persistence/Connection.js');
var WineDAO = require('./persistence/WineDAO.js');
var Wine = require('./model/Wine.js');
var GeoInfos = require('./model/GeoInfos.js');

//DB setup
//mongoose.connect("mongodb://mongo:27017/test");
var host = 'mongo';
var port = '27017';
var database = 'test';
var url = 'mongodb://mongo:27017/test';

var geo = new GeoInfos('Italia', 'Trieste', ['A', 'B'], [1,2,3]);
var barolo = new WineDAO(new Wine("Barolo", 'Tipo', 'descrizione', geo.toJSON()));
console.log(barolo);

// Use connect method to connect to the Server
app.get('/', function(req, res){
  var connection = new Connection(host, port, database);
  connection.getConnection()
  .then(function(db){
    return collection = db.collection('testCollection');
  })
  .then(function(collection){
    return collection.find({})
      .toArray();
  })
  .then(function(docs){
    console.log("Found the following records");
    console.log(docs);
    res.send(docs);
    db.close();
  })
  .catch(function(err) {
      throw new Error(err);
    })
});

app.listen(3000, function(){
 console.log('Example app listening on port 3000!');
});

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
//DB setup
//mongoose.connect("mongodb://mongo:27017/test");
var url = 'mongodb://mongo:27017/test';
// Use connect method to connect to the Server
app.get('/', function(req, res){
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var collection = db.collection('testColl');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      res.send(docs);
    });
   });
});
app.listen(3000, function(){
 console.log('Example app listening on port 3000!');
});

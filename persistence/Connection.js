'use strict'

var MongoClient = require('mongodb').MongoClient;

class Connection {
  constructor(host, port, db) {
    this.host = host;
    this.db = db;
    this.port = port;
  }
  getConnection() {
    if(this.connection==null) {
      this.connect();
      return this.connection;
    }
    return this.connection;
  }
  connect() {
    this.connection = MongoClient.connect('mongodb://'+this.host+':'+this.port+'/'+this.db);
  }
}

module.exports = Connection;

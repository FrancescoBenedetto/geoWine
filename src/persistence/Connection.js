var Sequelize = require('sequelize');
var dbConfig = require('../../config.js').database;

class Connection {
  constructor() {
    this.host = dbConfig.host;
    this.database = dbConfig.database;
    this.port = dbConfig.port;
    this.user = dbConfig.user;
    this.password = dbConfig.password;
    this.pool = dbConfig.pool;
    this.dialect = dbConfig.dialect;
    this.define = dbConfig.define;
  }
  getConnection() {
    if(this.connection==null) {
      this.connect();
      return this.connection;
    }
    return this.connection;
  }
  connect() {
    this.connection = new Sequelize(
      this.database,
      this.user,
      this.password,
         {
      host: this.host,
      port: this.port,
      dialect: this.dialect,
      pool: this.pool,
      define: this.define
        });
      }
  testConnection() {
    this.getConnection()
      .authenticate()
      .then(function(err) {
        console.log('Connection has been established successfully.');
      })
      .catch(function (err) {
        console.log('Unable to connect to the database:', err);
      });
  }
}

module.exports = Connection;

module.exports = {
  //Database
  'database' : {
    'host' : 'db',
    'user' : 'root',
    'password' : 'root',
    'database' : 'geo_wine',
    'dialect' : 'mysql',
     'pool' : {
      max: 5,
      min: 0,
      idle: 10000
    },
    'define': {
        timestamps: false
    }
  },
  //Server
  'server' : {
    'host' : process.env.HOSTNAME || '127.0.0.1',
    'port' : 3000
  }
}

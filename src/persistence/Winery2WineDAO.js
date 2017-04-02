var Winery2WineDAOFactory = require('./DAOFactories/Winery2WineDAOFactory.js');

class Winery2WineDAO {
  constructor(connection, DataTypes) {
    return Winery2WineDAOFactory(connection, DataTypes);
  }
}

module.exports = Winery2WineDAO;

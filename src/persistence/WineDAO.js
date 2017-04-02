var WineDAOFactory = require('./DAOFactories/WineDAOFactory.js');

class WineDAO {
  constructor(connection, DataTypes) {
    return WineDAOFactory(connection, DataTypes);
  }
}

module.exports = WineDAO;

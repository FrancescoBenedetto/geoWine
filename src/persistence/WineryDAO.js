var WineryDAOFactory = require('./DAOFactories/WineryDAOFactory.js');

class WineryDAO {
  constructor(connection, DataTypes) {
    return WineryDAOFactory(connection, DataTypes);
  }
}

module.exports = WineryDAO;

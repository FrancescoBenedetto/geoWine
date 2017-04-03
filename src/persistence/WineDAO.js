var WineDAOFactory = require('./DAOFactories/WineDAOFactory.js');

class WineDAO {
  constructor(connection, DataTypes) {
    this.dao =  WineDAOFactory(connection, DataTypes);
    this.rawOption = {raw: true};
  }
  findAll() {
    return this.dao.findAll({raw:true});
  }
}

module.exports = WineDAO;

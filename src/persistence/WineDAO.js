var WineDAOFactory = require('./DAOModel/DAOModel.js').WineDAO;

class WineDAO {
  constructor(connection, DataTypes) {
    this.dao =  WineDAOFactory;
  }
  findAll() {
    return this.dao.findAll({raw:true});
  }
}

module.exports = WineDAO;

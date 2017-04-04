var DAOModel = require('./DAOModel/DAOModel.js');

class WineryDAO {
  constructor(connection, DataTypes) {
    this.dao = DAOModel.Winery;
  }
  findAll() {
    return this.dao.findAll({raw: true});
  }
  findById(id) {
    return this.dao.find({
        raw : true,
        where: {
           id: id
        }
      });
  }
  findByName(name) {
    return this.dao.find({
      raw:true,
      where: {
        name: name
      }
    });
  }
  findWinesById(id) {
    return this.dao.findAll({
      raw: true,
      where: {
        id : id
      },
      include: [{model: DAOModel.Wine}]
    })
  }
}

module.exports = WineryDAO;

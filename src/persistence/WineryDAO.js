var WineryDAOFactory = require('./DAOFactories/WineryDAOFactory.js');

class WineryDAO {
  constructor(connection, DataTypes) {
    this.dao = WineryDAOFactory(connection, DataTypes);
    this.rawOption = {raw: true};
  }
  findAll() {
    return this.dao.findAll(this.rawOption);
  }
  findById(id) {
    return this.dao.find({
        raw : true,
        where: {
           id: id
        }
      })
      .then(
        function(winery) {
          if (!winery) {
              return 'Winery with id '+id+' not found';
          }
          return winery;
     },
        function(error) {
          console.log("Error executing findByIdQuery in WineryDAO: " + error);
        }
      );
  }
  findByName(name) {
    return this.dao.find({
      raw:true,
      where: {
        name: name
      }
    })
    .then(
      function(winery) {
        if(!winery) {
          return 'Winery with name '+name+' not found';
        }
        return winery;
      },
      function(error) {
          console.log("Error executing findByNameQuery in WineryDAO: " + error);
      }
    )
  }
}

module.exports = WineryDAO;

var DataTypes = require("sequelize");
var connection = require("./Connection.js").connection;

//connection.sync({force:true});

var WineDAO = connection.define('wine', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true
  },
  type: {
    type: DataTypes.STRING(6),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: true
  }
}, {
  tableName: 'wine'
});

var WineryDAO = connection.define('winery', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  nation: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  nation_code: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  region: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  district: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  municipality: {
    type: DataTypes.STRING(40),
    allowNull: true
  }
}, {
  tableName: 'winery'
});

var Winery2WineDAO = connection.define('winery_to_wine', {
    winerys_wine_description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'winery_to_wine'
  });


WineDAO.belongsToMany(WineryDAO, { through: Winery2WineDAO });
WineryDAO.belongsToMany(WineDAO, { through: Winery2WineDAO });

module.exports.WineDAO = WineDAO;
module.exports.WineryDAO = WineryDAO;

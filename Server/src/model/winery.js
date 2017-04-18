module.exports = function(sequelize, DataTypes){
  var winery = sequelize.define('winery', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'name'
    },
    nation: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'nation'
    },
    region: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'region'
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'latitude'
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'longitude'
    },
    address: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'address'
    }
  }, {
    tableName: 'winery',
    classMethods: {
      associate: function(models) {
        winery.belongsToMany(models.wine, { through: models.winery_to_wine });
      }
  }
}
  );

  return winery;
}

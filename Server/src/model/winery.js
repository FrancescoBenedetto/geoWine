module.exports = function(sequelize, DataTypes){
  var winery = sequelize.define('winery', {
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
  },
  {
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

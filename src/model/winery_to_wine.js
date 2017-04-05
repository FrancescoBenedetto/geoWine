module.exports = function(sequelize, DataTypes){
  return sequelize.define('winery_to_wine', {
      winerys_wine_description: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    }, {
      tableName: 'winery_to_wine'
    });
}

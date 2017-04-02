/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('winery_to_wine', {
    id_winery: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'winery',
        key: 'id'
      }
    },
    id_wine: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'wine',
        key: 'id'
      }
    },
    winerys_wine_description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'winery_to_wine'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wine', {
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
};

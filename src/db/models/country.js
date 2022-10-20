const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Country.init({
    name: DataTypes.STRING,
    shir: DataTypes.FLOAT,
    dolg: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};

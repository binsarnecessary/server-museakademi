'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mitra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Mitra.hasMany(models.course, {as: 'courseTitlle'})
    }
  }
  Mitra.init({
    emailMitra: DataTypes.STRING,
    nameMitra: DataTypes.STRING,
    instagramMitra: DataTypes.STRING,
    facebookMitra: DataTypes.STRING,
    waMitra: DataTypes.STRING,
    alamatMitra: DataTypes.STRING,
    courseTitle: DataTypes.STRING,
    logoMitra: DataTypes.STRING,
    slug: DataTypes.STRING,
    headTagline: DataTypes.TEXT,
    paragraphText: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'Mitra',
  });
  return Mitra;
};

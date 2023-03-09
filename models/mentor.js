'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mentor.init({
    mentor_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    skill: DataTypes.STRING,
    nomorKTP: DataTypes.INTEGER,
    scanKTP: DataTypes.STRING,
    fileCV: DataTypes.STRING,
    linkVideo: DataTypes.STRING,
    filePhoto: DataTypes.STRING,
    aboutMe: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'mentor',
  });
  return mentor;
};
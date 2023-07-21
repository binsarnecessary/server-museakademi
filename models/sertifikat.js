'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sertifikat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sertifikat.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
      Sertifikat.belongsTo(models.course, {foreignKey: 'course_id', as: 'course'})

    }
  }
  Sertifikat.init({
    user_id: DataTypes.INTEGER,
    nameParticipant: DataTypes.STRING,
    course_id: DataTypes.INTEGER,
    nameCourse: DataTypes.STRING,
    linkSertifikat: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sertifikat',
  });
  return Sertifikat;
};
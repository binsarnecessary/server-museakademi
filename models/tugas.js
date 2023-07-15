'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tugas.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
      Tugas.belongsTo(models.course, {foreignKey: 'course_id', as: 'course'})
    }
  }
  Tugas.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    judulTugas: DataTypes.STRING,
    petunjukPengerjaan: DataTypes.STRING,
    linkTugas: DataTypes.STRING,
    tugasStart: DataTypes.DATE,
    tugasEnd: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Tugas',
  });
  return Tugas;
};
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
      Tugas.hasOne(models.Mentor, {foreignKey: 'mentor_id', as: 'mentor'})
    }
  }
  Tugas.init({
    mentor_id: DataTypes.INTEGER,
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
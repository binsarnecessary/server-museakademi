'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nilai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Nilai.hasOne(models.Tugas, {foreignKey: 'tugas_id', as: 'tugas'})
      // Nilai.hasMany(models.User, {foreignKey: 'user_id', as: 'user'})
    }
  }
  Nilai.init({
    tugas_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    skorNilai: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Nilai',
  });
  return Nilai;
};
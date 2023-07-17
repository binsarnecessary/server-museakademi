'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      session.belongsTo(models.course, {foreignKey: 'course_id', as: 'course'})
    }
  }
  session.init({
    course_id: DataTypes.INTEGER,
    nameSession: DataTypes.STRING,
    linkvideo: DataTypes.STRING,
    linkzoom: DataTypes.STRING,
    linkpdf: DataTypes.STRING,
    linkppt: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'session',
  });
  return session;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      course.belongsTo(models.Mitra, {foreignKey: 'mitra_id', as: 'mitra' })
      course.belongsTo(models.Category, {foreignKey: 'category_id', as: 'category'})
      course.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
      // course.hasMany(models.order, {as: "order"})
      
    }
  }
  course.init({
    isCoursePaid: DataTypes.BOOLEAN,
    courseTitle: DataTypes.STRING,
    courseDescription: DataTypes.TEXT,
    courseStartDate: DataTypes.STRING,
    courseEndDate: DataTypes.STRING,
    coursePrice: DataTypes.INTEGER,
    courseStatus: DataTypes.STRING,
    courseTimeStart: DataTypes.STRING,
    courseTimeEnd: DataTypes.STRING,
    coursePhoto: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    courseRating: DataTypes.STRING,
    courseDeadline: DataTypes.STRING,
    namaMentor: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    mitra_id: DataTypes.INTEGER,
    slugMitra: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};
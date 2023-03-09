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
    }
  }
  course.init({
    course_id: DataTypes.STRING,
    courseTitle: DataTypes.STRING,
    courseDescription: DataTypes.STRING,
    courseStartDate: DataTypes.STRING,
    courseEndDate: DataTypes.STRING,
    coursePrice: DataTypes.INTEGER,
    courseStatus: DataTypes.STRING,
    courseTimeStart: DataTypes.STRING,
    courseTimeEnd: DataTypes.STRING,
    coursePhoto: DataTypes.STRING,
    courseCategory: DataTypes.STRING,
    courseRating: DataTypes.STRING,
    courseDeadline: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};
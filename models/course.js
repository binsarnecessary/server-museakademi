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
      course.belongsTo(models.mentor, {foreignKey: 'mentor_id', as: 'mentor'})
      course.hasMany(models.order, {as: "order"})
      
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
    mentor_id: DataTypes.INTEGER,
    mitra_id: DataTypes.INTEGER,
    slugMitra: DataTypes.STRING,
    sesi1: DataTypes.STRING,
    link1: DataTypes.STRING,
    sesi2: DataTypes.STRING,
    link2: DataTypes.STRING,
    sesi3: DataTypes.STRING,
    link3: DataTypes.STRING,
    sesi4: DataTypes.STRING,
    link4: DataTypes.STRING,
    sesi5: DataTypes.STRING,
    link5: DataTypes.STRING,
    sesi6: DataTypes.STRING,
    link6: DataTypes.STRING,
    sesi7: DataTypes.STRING,
    link7: DataTypes.STRING,
    sesi8: DataTypes.STRING,
    link8: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};
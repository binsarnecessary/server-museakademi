const { course } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class courseRepository {
  static async getCourseByID({ id }) {
    const getCourse = await course.findOne({ where: { id } });

    return getCourse;
  }

  static async getCourseByStatusPaid({ isCoursePaid }) {
    const courses = await course.findAll({ where: { isCoursePaid } });

    return courses;
  }
  
  static async getCourseByMitra({ slugMitra }) {
    const courses = await course.findAll({ where: { slugMitra } });
    
    return courses;
  }

  static async getAllCourse() {
      const getAllCourse = await course.findAll({

      });

      return getAllCourse;
  }

  static async create({
    course_id,
    isCoursePaid,
    courseTitle,
    courseDescription,
    courseStartDate,
    courseEndDate,
    coursePrice,
    courseStatus,
    courseTimeStart,
    courseTimeEnd,
    coursePhoto,
    courseCategory,
    courseRating,
    courseDeadline,
    namaMentor,
    slugMitra,
    sesi1,
    link1,
    sesi2,
    link2,
    sesi3,
    link3,
    sesi4,
    link4,
    sesi5,
    link5,
    sesi6,
    link6,
    sesi7,
    link8,
  }) {
    const createCourse = course.create({
      course_id,
      isCoursePaid,
      courseTitle,
      courseDescription,
      courseStartDate,
      courseEndDate,
      coursePrice,
      courseStatus,
      courseTimeStart,
      courseTimeEnd,
      coursePhoto,
      courseCategory,
      courseRating,
      courseDeadline,
      namaMentor,
      slugMitra,
      sesi1,
      link1,
      sesi2,
      link2,
      sesi3,
      link3,
      sesi4,
      link4,
      sesi5,
      link5,
      sesi6,
      link6,
      sesi7,
      link8,
    });

    return createCourse;
  }

  static async deleteCourseById({ id }) {
    const deletedCourse = await course.destroy({ where: { id } });

    return deletedCourse;
  }

  static async getPostsByID({ id }) {
    const getPosts = await Post.findAll({ where: { user_id: id } });

    return getPosts;
  }
}



module.exports = courseRepository;

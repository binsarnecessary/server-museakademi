const { User } = require("../models");
const { course } = require("../models");
const { transactionhistory } = require("../models");
const { order } = require("../models");
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
    const getAllCourse = await course.findAll({});

    return getAllCourse;
  }

  static async getAllCourseByCategory({ category_id }) {
    const getAllCourseByCategory = await course.findAll({
      where: { category_id },
      include: "category",
    });

    return getAllCourseByCategory;
  }

  static async coursesPurchase({ id }) {
    const coursePurchased = await course.findAll({
      include: [
        {
          model: order,
          as: "order",
          required: true,
          include: [
            {
              model: transactionhistory,
              as: "transactionhistory",
              required: true,
              where: {
                transaction_status: "success",
              },
            },
            {
              model: User,
              as: "user",
              where: { id },
            },
          ],
        },
      ],
    });

    return coursePurchased;
  }

  static async create({
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
    category_id,
    courseRating,
    courseDeadline,
    namaMentor,
    user_id,
    mitra_id,
    slugMitra,
  }) {
    const createCourse = course.create({
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
      category_id,
      courseRating,
      courseDeadline,
      namaMentor,
      user_id,
      mitra_id,
      slugMitra,
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

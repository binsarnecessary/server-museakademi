'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_id: {
        type: Sequelize.STRING
      },
      courseTitle: {
        type: Sequelize.STRING
      },
      courseDescription: {
        type: Sequelize.STRING
      },
      courseStartDate: {
        type: Sequelize.STRING
      },
      courseEndDate: {
        type: Sequelize.STRING
      },
      coursePrice: {
        type: Sequelize.INTEGER
      },
      courseStatus: {
        type: Sequelize.STRING
      },
      courseTimeStart: {
        type: Sequelize.STRING
      },
      courseTimeEnd: {
        type: Sequelize.STRING
      },
      coursePhoto: {
        type: Sequelize.STRING
      },
      courseCategory: {
        type: Sequelize.STRING
      },
      courseRating: {
        type: Sequelize.STRING
      },
      courseDeadline: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};
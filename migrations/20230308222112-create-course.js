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
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      isCoursePaid: {
        type: Sequelize.BOOLEAN
      },
      courseTitle: {
        type: Sequelize.STRING
      },
      courseDescription: {
        type: Sequelize.TEXT
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
      namaMentor: {
        type: Sequelize.STRING
      },
      mitraId: {
        type: Sequelize.INTEGER
      },
      slugMitra: {
        type: Sequelize.STRING
      },
      sesi1: {
        type: Sequelize.STRING
      },
      link1: {
        type: Sequelize.STRING
      },
      sesi2: {
        type: Sequelize.STRING
      },
      link2: {
        type: Sequelize.STRING
      },
      sesi3: {
        type: Sequelize.STRING
      },
      link3: {
        type: Sequelize.STRING
      },
      sesi4: {
        type: Sequelize.STRING
      },
      link4: {
        type: Sequelize.STRING
      },
      sesi5: {
        type: Sequelize.STRING
      },
      link5: {
        type: Sequelize.STRING
      },
      sesi6: {
        type: Sequelize.STRING
      },
      link6: {
        type: Sequelize.STRING
      },
      sesi7: {
        type: Sequelize.STRING
      },
      link7: {
        type: Sequelize.STRING
      },
      sesi8: {
        type: Sequelize.STRING
      },
      link8: {
        type: Sequelize.STRING
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
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
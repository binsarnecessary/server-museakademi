"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("courses", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      isCoursePaid: {
        type: Sequelize.BOOLEAN,
      },
      courseTitle: {
        type: Sequelize.STRING,
      },
      courseDescription: {
        type: Sequelize.TEXT,
      },
      courseStartDate: {
        type: Sequelize.STRING,
      },
      courseEndDate: {
        type: Sequelize.STRING,
      },
      coursePrice: {
        type: Sequelize.INTEGER,
      },
      courseStatus: {
        type: Sequelize.STRING,
      },
      courseTimeStart: {
        type: Sequelize.STRING,
      },
      courseTimeEnd: {
        type: Sequelize.STRING,
      },
      coursePhoto: {
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {      
          model: 'Categories',
          key: 'id'
        }
      },
      courseRating: {
        type: Sequelize.STRING,
      },
      courseDeadline: {
        type: Sequelize.STRING,
      },
      namaMentor: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      mitra_id: {
        type: Sequelize.INTEGER,
        references: {      
          model: 'Mitras',
          key: 'id'
        }
      },
      slugMitra: {
        type: Sequelize.STRING,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("courses");
  },
};

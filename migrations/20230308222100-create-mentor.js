'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mentors', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.STRING
      },
      nomorKTP:{
        type: Sequelize.STRING
      },
      scanKTP:{
        type: Sequelize.STRING
      },
      fileCV:{
        type: Sequelize.STRING
      },
      linkVideo:{
        type: Sequelize.STRING
      },
      filePhoto:{
        type: Sequelize.STRING
      },
      aboutMe:{
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
    await queryInterface.dropTable('mentors');
  }
};
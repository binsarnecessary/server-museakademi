'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mentor_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.STRING
      },
      nomorKTP:{
        type: Sequelize.INTEGER
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
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mitras', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      emailMitra: {
        type: Sequelize.STRING
      },
      nameMitra: {
        type: Sequelize.STRING
      },
      instagramMitra: {
        type: Sequelize.STRING
      },
      facebookMitra: {
        type: Sequelize.STRING
      },
      waMitra: {
        type: Sequelize.STRING
      },
      alamatMitra: {
        type: Sequelize.STRING
      },
      courseTitle: {
        type: Sequelize.STRING,
      },
      logoMitra: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      headTagline: {
        type: Sequelize.TEXT,
      },
      paragraphText: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Mitras');
  }
};
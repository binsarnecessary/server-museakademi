'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Livestreamings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      livestreaming_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      titleLivestreaming: {
        type: Sequelize.STRING
      },
      namaChanel: {
        type: Sequelize.STRING
      },
      thumbnailLivestreaming: {
        type: Sequelize.STRING
      },
      liveStart: {
        type: Sequelize.DATE
      },
      liveEnd: {
        type: Sequelize.DATE
      },
      deskripsiLive: {
        type: Sequelize.TEXT
      },
      youtubeUrl: {
        type: Sequelize.STRING
      },
      deletedBy: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Livestreamings');
  }
};
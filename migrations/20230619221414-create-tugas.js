'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('Tugas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {      
          model: 'courses',
          key: 'id'
        }
      },
      judulTugas: {
        type: Sequelize.STRING,
      },
      petunjukPengerjaan: {
        type: Sequelize.STRING
      },
      linkTugas: {
        type: Sequelize.STRING
      },
      tugasStart: {
        type: Sequelize.DATE
      },
      tugasEnd: {
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
    await queryInterface.dropTable('Tugas');
  }
};
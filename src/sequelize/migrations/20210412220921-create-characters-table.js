/* eslint-disable max-lines-per-function */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Characters', {
      characterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      description: {
        unique: true,
        type: Sequelize.STRING,
      },
      thumbnail: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Characters');
  },
};

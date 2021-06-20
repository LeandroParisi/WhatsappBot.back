'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Countries', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        countryName: {
          allowNull: false,
          type: Sequelize.STRING
        }
      }, { transaction });

      await transaction.commit();

    } catch(error) {
      await transaction.roolback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Countries');
  }
};

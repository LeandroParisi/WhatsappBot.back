'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('OpeningHours', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        branchId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Branches',
            key: 'id'
          }
        },
        monday: {
          type: Sequelize.STRING,
        },
        tuesday: {
          type: Sequelize.STRING,
        },
        wednesday: {
          type: Sequelize.STRING,
        },
        thursday: {
          type: Sequelize.STRING,
        },
        friday: {
          type: Sequelize.STRING,
        },
        saturday: {
          type: Sequelize.STRING,
        },
        sunday: {
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
      }, { transaction });


      await transaction.commit();

    } catch(error) {
      await transaction.rollback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OpeningHours');
  }
};

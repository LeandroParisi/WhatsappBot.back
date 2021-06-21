'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('DeliveryFees', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        branchId: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'Branches',
            key: 'id'
          }
        },
        deliveryFees: {
          allowNull: false,
          type: Sequelize.JSONB,
          // {
          //   type: enum('unique', 'neighborhood', 'radius'),
          //   fees: {

          //   }
          // }
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
    await queryInterface.dropTable('DeliveryFees');
  }
};

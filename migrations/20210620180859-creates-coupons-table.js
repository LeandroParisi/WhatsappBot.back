'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Coupons', {
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
        cupomCode: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        discout: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        conditions: {
          allowNull: false,
          type: Sequelize.JSONB,
          // [
          //   {
          //     type: products,
          //     condition: [1, 2, 3]
          //   },
          //   {
          //     type: maxPrice,
          //     condition: 50,
          //   }
          // ]
        },
        // maxUses
        // used
        dueDate: {
          type: Sequelize.DATE,
        },
        isActive: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true,
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
    await queryInterface.dropTable('Coupons');
  }
};
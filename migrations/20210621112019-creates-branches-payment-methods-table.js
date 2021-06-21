'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Branches_PaymentMethods', {
        branchId: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE',
          references: {
            model: 'Branches',
            key: 'id',
          },
        },
        paymentMethodId: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE',
          references: {
            model: 'PaymentMethods',
            key: 'id',
          },
        },
      }, { transaction });


      await transaction.commit();

    } catch(error) {
      await transaction.rollback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Branches_PaymentMethods');
  }
};

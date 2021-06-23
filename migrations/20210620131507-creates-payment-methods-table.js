'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('PaymentMethods', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        paymentMethod: {
          allowNull: false,
          type: Sequelize.STRING,
          // ('money',
          // 'pix',
          // 'visa',
          // 'mastercard',
          // 'elo',
          // 'hipercard',
          // 'diners_club',
          // 'american_express',
          // 'alelo_meal',
          // 'alelo_food',
          // 'sodexo_meal',
          // 'sodexo_food',)
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
    await queryInterface.dropTable('PaymentMethods');
  }
};

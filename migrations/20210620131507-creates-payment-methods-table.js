module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('payment_methods', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        payment_method: {
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
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payment_methods');
  },
};

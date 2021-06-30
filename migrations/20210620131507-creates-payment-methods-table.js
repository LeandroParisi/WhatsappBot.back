module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('payment_methods', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        payment_method: {
          allowNull: false,
          type: Sequelize.STRING,
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

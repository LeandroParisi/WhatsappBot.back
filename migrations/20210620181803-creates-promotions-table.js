module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('promotions', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        total_price: {
          allowNull: false,
          type: Sequelize.DECIMAL(10, 2),
        },
        due_date: {
          type: Sequelize.DATE,
        },
        avaiability: {
          allowNull: true,
          type: Sequelize.ARRAY(Sequelize.INTEGER),
        },
        is_active: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        image: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('promotions');
  },
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('menus', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        menu_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        is_active: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true,
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
    await queryInterface.dropTable('menus');
  },
};

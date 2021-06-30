module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('promotions', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        branch_id: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'branches',
            key: 'id',
          },
        },
        total_price: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        due_date: {
          type: Sequelize.DATE,
        },
        avaiability: {
          allowNull: true,
          type: Sequelize.ARRAY(Sequelize.ENUM(
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
          )),
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
    await queryInterface.dropTable('promotions');
  },
};

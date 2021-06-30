module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('delivery_fees', {
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
        delivery_fees: {
          allowNull: false,
          type: Sequelize.JSONB,
          // {
          //   type: enum('unique', 'neighborhood', 'radius'),
          //   fees: {

          //   }
          // }
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
    await queryInterface.dropTable('delivery_fees');
  },
};

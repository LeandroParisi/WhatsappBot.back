module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('coupons', {
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
        cupom_code: {
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
        due_date: {
          type: Sequelize.DATE,
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
    await queryInterface.dropTable('coupons');
  },
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('orders_products', {
        order_id: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'orders',
            key: 'id',
          },
        },
        product_id: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'products',
            key: 'id',
          },
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 1
        },
        attributes: {
          allowNull: true,
          type: Sequelize.JSONB,
        }
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders_products');
  },
};

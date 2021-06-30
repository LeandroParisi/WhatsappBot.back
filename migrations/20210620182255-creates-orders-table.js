module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('orders', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        branch_id: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'branches',
            key: 'id',
          },
        },
        customer_id: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'customers',
            key: 'id',
          },
        },
        sub_total: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        delivery_type_id: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: {
            model: 'delivery_types',
            key: 'id',
          },
        },
        delivery_fee: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: '0',
        },
        payment_method_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'payment_methods',
            key: 'id',
          },
        },
        discount: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: '0',
        },
        total_price: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        status: {
          allowNull: false,
          type: Sequelize.ENUM(
            'placed',
            'to_do',
            'in_production',
            'ready_to_deliver',
            'dispatched',
            'fullfilled',
          ),
        },
        coupom_id: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: {
            model: 'coupons',
            key: 'id',
          },
        },
        promotion_id: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: {
            model: 'promotions',
            key: 'id',
          },
        },
        estimated_delivery_time: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        comments: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        dispatch_time: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        delivery_time: {
          allowNull: true,
          type: Sequelize.DATE,
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
    await queryInterface.dropTable('orders');
  },
};

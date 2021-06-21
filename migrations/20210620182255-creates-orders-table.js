'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Orders', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        branchId: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'Branches',
            key: 'id'
          }
        },
        customerId: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'Customers',
            key: 'id'
          }
        },
        subTotal: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        deliveryFee: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: '0', 
        },
        paymentMethodId: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'PaymentMethods',
            key: 'id'
          }
        },
        discount: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: '0', 
        },
        totalPrice: {
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
            'fullfilled'
          )
        },
        coupomId: {
          allowNull: true,
          type: Sequelize.UUID,
          references: {
            model: 'Coupons',
            key: 'id'
          }
        },
        promotionId: {
          allowNull: true,
          type: Sequelize.UUID,
          references: {
            model: 'Promotions',
            key: 'id'
          }
        },
        estimatedDeliveryTime: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        comments: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        dispatchTime: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        deliveryTime: {
          allowNull: true,
          type: Sequelize.DATE,
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
    await queryInterface.dropTable('Orders');
  }
};

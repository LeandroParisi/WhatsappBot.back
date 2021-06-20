'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Orders', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        branchId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Branches',
            key: 'id'
          }
        },
        customerId: {
          allowNull: false,
          type: Sequelize.INTEGER,
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
        paymentMethods: {
          allowNull: false,
          type: Sequelize.ARRAY(Sequelize.ENUM(
          'money',
          'pix',
          'visa',
          'mastercard',
          'elo',
          'hipercard',
          'diners_club',
          'american_express',
          'alelo_meal',
          'alelo_food',
          'sodexo_meal',
          'sodexo_food',
          )),
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
        totalPrice: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        coupomId: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: {
            model: 'Coupons',
            key: 'id'
          }
        },
        promotionId: {
          allowNull: true,
          type: Sequelize.INTEGER,
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
        postTime: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
        dispatchTime: {
          allowNull: true,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
        deliveryTime: {
          allowNull: true,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
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

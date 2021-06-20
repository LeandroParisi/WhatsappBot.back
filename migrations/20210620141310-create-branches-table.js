'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Branches', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        manager: {
          allowNull: false,
          type: Sequelize.STRING
        },
        branchName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        countryId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Countries',
            key: 'id'
          }
        },
        stateId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'States',
            key: 'id'
          }
        },
        cityId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Cities',
            key: 'id'
          }
        },
        neibourhood: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        street: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        streetNumber: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        streetComplement: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        postalCode: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        deliveryType: {
          allowNull: false,
          type: Sequelize.ENUM('delivery', 'counter_pickup', 'on_spot_consumption')
        },
        deliveryFeeType: {
          allowNull: false,
          type: Sequelize.ENUM('unique', 'neibourhood', 'radius')
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
        isActive: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true,
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
    await queryInterface.dropTable('Branches');
  }
};

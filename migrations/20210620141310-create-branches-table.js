'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Users', {
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
          type: Sequelize.String,
        },
        street: {
          allowNull: false,
          type: Sequelize.String,
        },
        streetNumber: {
          allowNull: false,
          type: Sequelize.String,
        },
        streetComplement: {
          allowNull: false,
          type: Sequelize.String,
        },
        postalCode: {
          allowNull: false,
          type: Sequelize.String,
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

      // await queryInterface.addIndex('Users', ['whatsappNumber'], { transaction });

      await transaction.commit();

    } catch(error) {
      await transaction.roolback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

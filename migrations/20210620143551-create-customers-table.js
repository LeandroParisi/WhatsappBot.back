'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Customers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        whatsappNumber: {
          allowNull: false,
          type: Sequelize.STRING,  
          unique: true,
        },
        whatsappId: {
          allowNull: false,
          type: Sequelize.STRING,  
          unique: true,
        },
        email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING,
        },
        firstName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        middleName: {
          type: Sequelize.STRING,
        },
        lastName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        cpf: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        passwordHash: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        avatar: {
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

      await queryInterface.addIndex('Customers', ['whatsappNumber'], { transaction });

      await queryInterface.addIndex('Customers', ['whatsappId'], { transaction });

      await queryInterface.addIndex('Customers', ['cpf'], { transaction });

      await transaction.commit();

    } catch(error) {
      await transaction.rollback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Customers');
  }
};

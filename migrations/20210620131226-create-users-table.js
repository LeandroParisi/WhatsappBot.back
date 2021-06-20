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
        bussinessName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        cnpj: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING,
        },
        ownerFirstName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        ownerMiddleName: {
          type: Sequelize.STRING,
        },
        ownerLastName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        ownerCpf: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        passwordHash: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        botName: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: 'Walle',
        },
        logo: {
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

      await queryInterface.addIndex('Users', ['whatsappNumber'], { transaction });

      await queryInterface.addIndex('Users', ['whatsappId'], { transaction });

      await queryInterface.addIndex('Users', ['cnpj'], { transaction });

      await transaction.commit();

    } catch(error) {
      await transaction.rollback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

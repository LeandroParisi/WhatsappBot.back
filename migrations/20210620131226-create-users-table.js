module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        whatsapp_number: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        whatsapp_id: {
          allowNull: true,
          type: Sequelize.STRING,
          unique: true,
        },
        bussiness_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        cnpj: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING,
        },
        owner_first_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        owner_middle_name: {
          type: Sequelize.STRING,
        },
        owner_last_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        owner_cpf: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        bot_name: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: 'Walle',
        },
        logo: {
          type: Sequelize.STRING,
        },
        role: {
          type: Sequelize.ENUM('admin', 'user'),
          defaultValue: 'user',
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

      await queryInterface.addIndex('users', ['whatsapp_number'], { transaction });

      await queryInterface.addIndex('users', ['whatsapp_id'], { transaction });

      await queryInterface.addIndex('users', ['cnpj'], { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};

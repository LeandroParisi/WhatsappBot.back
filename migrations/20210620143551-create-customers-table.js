module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('customers', {
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
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING,
        },
        first_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        middle_name: {
          type: Sequelize.STRING,
        },
        last_name: {
          type: Sequelize.STRING,
        },
        cpf: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        country_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'countries',
            key: 'id',
          },
        },
        state_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'states',
            key: 'id',
          },
        },
        city_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'cities',
            key: 'id',
          },
        },
        neighborhood: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        street: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        street_number: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        street_complement: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        postal_code: {
          allowNull: false,
          type: Sequelize.STRING,
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

      await queryInterface.addIndex('customers', ['whatsapp_number'], { transaction });

      await queryInterface.addIndex('customers', ['whatsapp_id'], { transaction });

      await queryInterface.addIndex('customers', ['cpf'], { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customers');
  },
};

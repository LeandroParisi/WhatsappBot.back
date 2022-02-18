module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.createTable('customer_addresses', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        customer_id: {
          allowNull: false,
          type: Sequelize.UUID,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'customers',
            key: 'id',
          },
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
        lat: {
          allowNull: false,
          type: Sequelize.DECIMAL(17, 15),
        },
        lng: {
          allowNull: false,
          type: Sequelize.DECIMAL(19, 15),
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
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer_addresses')
  },
}

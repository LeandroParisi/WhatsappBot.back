module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('branches', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        manager_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        branch_name: {
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
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
        },
        state_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'states',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
        },
        city_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'cities',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
        },
        neibourhood: {
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
        delivery_fees: {
          allowNull: false,
          type: Sequelize.JSONB,
          // {
          //   type: enum('unique', 'neighborhood', 'radius'),
          //   fees: {

          //   }
          // }
        },
        logo: {
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

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('branches');
  },
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('opening_hours', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        branch_id: {
          allowNull: false,
          type: Sequelize.UUID,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'branches',
            key: 'id',
          },
        },
        monday: {
          type: Sequelize.JSONB,
        },
        tuesday: {
          type: Sequelize.JSONB,
        },
        wednesday: {
          type: Sequelize.JSONB,
        },
        thursday: {
          type: Sequelize.JSONB,
        },
        friday: {
          type: Sequelize.JSONB,
        },
        saturday: {
          type: Sequelize.JSONB,
        },
        sunday: {
          type: Sequelize.JSONB,
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
    await queryInterface.dropTable('opening_hours');
  },
};

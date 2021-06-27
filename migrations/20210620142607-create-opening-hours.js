module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('opening_hours', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        branch_id: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'branches',
            key: 'id',
          },
        },
        monday: {
          type: Sequelize.STRING,
        },
        tuesday: {
          type: Sequelize.STRING,
        },
        wednesday: {
          type: Sequelize.STRING,
        },
        thursday: {
          type: Sequelize.STRING,
        },
        friday: {
          type: Sequelize.STRING,
        },
        saturday: {
          type: Sequelize.STRING,
        },
        sunday: {
          type: Sequelize.STRING,
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

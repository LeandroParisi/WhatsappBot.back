module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('States', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        state_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        state_code: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        country_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'countries',
            key: 'id',
          },
        }
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('States');
  },
};

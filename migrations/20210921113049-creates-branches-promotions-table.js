module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('branches_promotions', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        branch_id: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'branches',
            key: 'id',
          },
        },
        promotion_id: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'promotions',
            key: 'id',
          },
        },
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('branches_promotions');
  },
};

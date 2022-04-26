module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('coupons_conditions', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        coupom_id: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'coupons',
            key: 'id',
          },
        },
        condition_id: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'conditions',
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
    await queryInterface.dropTable('coupons_conditions');
  },
};

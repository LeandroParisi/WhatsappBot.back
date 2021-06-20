'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Branches_Coupons', {
        branchId: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'Branches',
            key: 'id',
          },
        },
        cupomId: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'Coupons',
            key: 'id',
          },
        },
      }, { transaction });


      await transaction.commit();

    } catch(error) {
      await transaction.rollback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Branches_Coupons');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Branches_DeliveryTypes', {
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
        deliveryTypeId: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'DeliveryTypes',
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
    await queryInterface.dropTable('Branches_DeliveryTypes');
  }
};

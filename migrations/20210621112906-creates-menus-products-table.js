'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Menus_Products', {
        menuId: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE',
          references: {
            model: 'Menus',
            key: 'id',
          },
        },
        productId: {
          allowNull: false,
          foreignKey: true,
          type: Sequelize.UUID,
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE',
          references: {
            model: 'Products',
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
    await queryInterface.dropTable('Menus_Products');
  }
};

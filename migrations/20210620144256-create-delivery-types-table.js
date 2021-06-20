'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('DeliveryTypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        deliveryType: {
          allowNull: false,
          type: Sequelize.ENUM('delivery', 'counter_pickup', 'on_spot_consumption')
        }
      }, { transaction });


      await transaction.commit();

    } catch(error) {
      await transaction.rollback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DeliveryTypes');
  }
};

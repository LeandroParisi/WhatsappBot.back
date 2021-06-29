const { branchOneId, branchTwoId } = require('./20210623221400-populateUsersTable');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('delivery_types', [
      {
        delivery_type: 'delivery',
      },
      {
        delivery_type: 'counter_pickup',
      },
      {
        delivery_type: 'on_spot_consumption',
      },
    ]);

    await queryInterface.bulkInsert('branches_delivery_types', [
      {
        branch_id: branchOneId,
        delivery_type_id: 1,
      },
      {
        branch_id: branchOneId,
        delivery_type_id: 2,
      },
      {
        branch_id: branchTwoId,
        delivery_type_id: 1,
      },
      {
        branch_id: branchTwoId,
        delivery_type_id: 2,
      },
      {
        branch_id: branchTwoId,
        delivery_type_id: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('branches_delivery_types', null, {});
    await queryInterface.bulkDelete('delivery_types', null, {});
  },
};

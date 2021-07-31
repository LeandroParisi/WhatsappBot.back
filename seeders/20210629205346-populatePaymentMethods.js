const { branchOneId, branchTwoId } = require('./20210623221400-populateUsersTable');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('payment_methods', [
      { payment_method: 'money' },
      { payment_method: 'pix' },
      { payment_method: 'credit' },
      { payment_method: 'debit' },
      { payment_method: 'alelo_meal' },
      { payment_method: 'alelo_food' },
      { payment_method: 'sodexo_meal' },
      { payment_method: 'sodexo_food' },
    ]);

    await queryInterface.bulkInsert('branches_payment_methods', [
      {
        branch_id: branchOneId,
        payment_method_id: 1,
      },
      {
        branch_id: branchOneId,
        payment_method_id: 2,
      },
      {
        branch_id: branchTwoId,
        payment_method_id: 1,
      },
      {
        branch_id: branchTwoId,
        payment_method_id: 2,
      },
      {
        branch_id: branchTwoId,
        payment_method_id: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('branches_payment_methods', null, {});
    await queryInterface.bulkDelete('payment_methods', null, {});
  },
};

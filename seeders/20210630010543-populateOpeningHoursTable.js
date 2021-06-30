const { branchOneId, branchTwoId } = require('./20210623221400-populateUsersTable');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('opening_hours', [
      {
        branch_id: branchOneId,
        monday: '7:00/18:00',
        tuesday: '7:00/18:00',
        wednesday: '7:00/18:00',
        thursday: '7:00/18:00',
        friday: '7:00/18:00',
        saturday: '7:00/18:00',
        sunday: '7:00/18:00',
      },
      {
        branch_id: branchTwoId,
        monday: '7:00/18:00',
        tuesday: '7:00/18:00',
        wednesday: '7:00/18:00',
        thursday: '7:00/18:00',
        friday: '7:00/18:00',
        saturday: '7:00/18:00',
        sunday: '7:00/18:00',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('opening_hours', null, {});
  },
};

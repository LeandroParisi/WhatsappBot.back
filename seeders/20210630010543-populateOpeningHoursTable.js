const { branchOneId, branchTwoId,branchThreeId, branchFourId, branchFiveId } = require('./20210623221400-populateUsersTable')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('opening_hours', [
      {
        branch_id: branchOneId,
        monday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        tuesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        wednesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        thursday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        friday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        saturday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        sunday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
      },
      {
        branch_id: branchTwoId,
        monday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        tuesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        wednesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        thursday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        friday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        saturday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        sunday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
      },
      {
        branch_id: branchThreeId,
        monday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        tuesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        wednesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        thursday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        friday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        saturday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        sunday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
      },
      {
        branch_id: branchFourId,
        monday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        tuesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        wednesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        thursday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        friday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        saturday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        sunday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
      },
      {
        branch_id: branchFiveId,
        monday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        tuesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        wednesday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        thursday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        friday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        saturday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
        sunday: JSON.stringify({ hours: ['7:00', '18:00'], overnight: false, isOpened: true }),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('opening_hours', null, {})
  },
}

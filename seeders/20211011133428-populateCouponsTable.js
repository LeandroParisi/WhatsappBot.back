const { branchOneId, branchTwoId } = require('./20210623221400-populateUsersTable')
const { v4: uuid } = require('uuid')

const id1 = uuid()
const id2 = uuid()
const id3 = uuid()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('conditions', [
      {
        id: 1,
        name: 'price_limit',
      },
      {
        id: 2,
        name: 'date_limit',
      },
      {
        id: 3,
        name: 'distance_limit_in_km',
      },
      {
        id: 4,
        name: 'uses_limit',
      },
    ])

    await queryInterface.bulkInsert('coupons', [
      {
        id: id1,
        coupom_code: 'cupom_usos',
        discount_type: 'percentage',
        free_delivery: true,
        discount: 10.30,
        used: 0,
        uses_limit: 10,
      },
      {
        id: id2,
        coupom_code: 'cupom_distancia',
        discount_type: 'absolute_value',
        free_delivery: true,
        discount: 15,
        used: 0,
        distance_limit_in_km: 15,
      },
      {
        id: id3,
        coupom_code: 'cupom_data_preco',
        discount_type: 'absolute_value',
        free_delivery: false,
        discount: 20,
        used: 0,
        price_limit: 20.20,
        date_limit: new Date(2021, 12, 10),
      },
    ])

    await queryInterface.bulkInsert('coupons_branches', [
      {
        coupom_id: id1,
        branch_id: branchOneId,
      },
      {
        coupom_id: id2,
        branch_id: branchOneId,
      },
      {
        coupom_id: id2,
        branch_id: branchTwoId,
      },
      {
        coupom_id: id3,
        branch_id: branchOneId,
      },
    ])

    await queryInterface.bulkInsert('coupons_conditions', [
      {
        coupom_id: id1,
        condition_id: 4,
      },
      {
        coupom_id: id2,
        condition_id: 3,
      },
      {
        coupom_id: id3,
        condition_id: 2,
      },
      {
        coupom_id: id3,
        condition_id: 1,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('conditions', null, {})
    await queryInterface.bulkDelete('coupons', null, {})
    await queryInterface.bulkDelete('coupons_branches', null, {})
    await queryInterface.bulkDelete('coupons_conditions', null, {})
  },
}

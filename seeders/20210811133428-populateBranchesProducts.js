const { branchOneId, branchTwoId, branchThreeId } = require('./20210623221400-populateUsersTable')
const {
  productOneId,
  productTwoId,
  productThreeId,
  productFourId,
} = require('./20210710183145-populateProductsTable')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('branches_products', [
      {
        branch_id: branchOneId,
        product_id: productOneId,
      },
      {
        branch_id: branchTwoId,
        product_id: productOneId,
      },
      {
        branch_id: branchOneId,
        product_id: productTwoId,
      },
      {
        branch_id: branchTwoId,
        product_id: productTwoId,
      },
      {
        branch_id: branchTwoId,
        product_id: productThreeId,
      },
      {
        branch_id: branchThreeId,
        product_id: productFourId,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('branches_products', null, {})
  },
}

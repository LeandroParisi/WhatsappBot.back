const {
  menuOne,
  menuTwo,
  menuThree,
  menuFour,
  menuFive,
  menuSix,
  menuSeven,
} = require('./20210630001641-populateMenusTable')

const {
  productOneId,
  productTwoId,
  productThreeId,
} = require('./20210710183145-populateProductsTable')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('menus_products', [
      {
        menu_id: menuOne,
        product_id: productOneId,
      },
      {
        menu_id: menuOne,
        product_id: productTwoId,
      },
      {
        menu_id: menuOne,
        product_id: productThreeId,
      },
      {
        menu_id: menuTwo,
        product_id: productOneId,
      },
      {
        menu_id: menuThree,
        product_id: productOneId,
      },
      {
        menu_id: menuFour,
        product_id: productOneId,
      },
      {
        menu_id: menuFive,
        product_id: productOneId,
      },
      {
        menu_id: menuSix,
        product_id: productOneId,
      },
      {
        menu_id: menuSeven,
        product_id: productOneId,
      },
      {
        menu_id: menuSeven,
        product_id: productTwoId,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('menus_products', null, {})
  },
}

const attributeTypes = require('../src/Application/Domains/StoreManagement/Controllers/Legacy/Shared/interfaces/attributes/attributeTypes')
const {
  branchOneId,
  branchTwoId,
  branchThreeId,
  branchFourId,
  branchFiveId
} = require('./20210623221400-populateUsersTable')

const {
  productOneId,
  productTwoId,
  productThreeId,
  productOneAttrOne,
  productOneAttrTwo,
  productOneAttrThree,
  productOneAttrFour,
  productOneAttrFive,
  productOneAttrSix,
  productThreeAttrOne,
  productThreeAttrTwo,
  productThreeAttrThree,
  productFourAttrOne,
  productFourAttrTwo,
  productFourAttrThree,
} = require('./20210710183145-populateProductsTable')

const promotionOneId = 1
const promotionTwoId = 2
const promotionThreeId = 3

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('promotions', [
      {
        name: 'Super promoção 1',
        total_price: 20.20,
        due_date: new Date(2022, 1, 1),
        avaiability: [1, 2, 3, 4, 5, 6, 7],
      },
      {
        name: 'Super promoção 2',
        total_price: 30.20,
        due_date: new Date(2022, 1, 1),
        avaiability: [1, 2, 3, 4, 5, 6, 7],
      },
      {
        name: 'Super promoção 3',
        total_price: 40.20,
        due_date: new Date(2022, 1, 1),
        avaiability: [1, 2, 3, 4, 5, 6, 7],
      },
    ])

    await queryInterface.bulkInsert('promotions_products', [
      {
        promotion_id: 1,
        product_id: productOneId,
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            name: 'M',
            price: 10,
            quantity: 1,
            id: productOneAttrTwo,
          },
          {
            type: attributeTypes.additionals,
            name: 'borda queijo',
            price: 2,
            quantity: 1,
            id: productOneAttrFour,
          },
          {
            type: attributeTypes.additionals,
            name: 'catchup',
            price: 0,
            quantity: 5,
            id: productOneAttrSix,
          },
        ]),
      },
      {
        promotion_id: 1,
        product_id: productTwoId,
        attributes: JSON.stringify([]),

      },
      {
        promotion_id: 1,
        product_id: productThreeId,
        attributes: JSON.stringify([
          {
            type: attributeTypes.additionals,
            name: 'bacon',
            price: 5,
            quantity: 2,
            id: productThreeAttrOne,
          },
          {
            type: attributeTypes.additionals,
            name: 'carne extra',
            price: 6,
            quantity: 1,
            id: productThreeAttrTwo,
          },
        ]),
      },
      {
        promotion_id: 2,
        product_id: productOneId,
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            name: 'P',
            price: 5,
            quantity: 1,
            id: productOneAttrOne,
          },
          {
            type: attributeTypes.additionals,
            name: 'borda queijo',
            price: 2,
            quantity: 1,
            id: productOneAttrFour,
          },
        ]),
      },
      {
        promotion_id: 2,
        product_id: productTwoId,
        attributes: JSON.stringify([]),
      },
      {
        promotion_id: 3,
        product_id: productOneId,
        attributes: JSON.stringify([]),
      },
    ])

    await queryInterface.bulkInsert('branches_promotions', [
      {
        promotion_id: promotionOneId,
        branch_id: branchOneId,
      },
      {
        promotion_id: promotionTwoId,
        branch_id: branchTwoId,
      },
      {
        promotion_id: promotionThreeId,
        branch_id: branchThreeId,
      },
      {
        promotion_id: promotionOneId,
        branch_id: branchTwoId,
      },
      {
        promotion_id: promotionOneId,
        branch_id: branchThreeId,
      }, {
        promotion_id: promotionOneId,
        branch_id: branchFourId,
      }, {
        promotion_id: promotionOneId,
        branch_id: branchFiveId,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('promotions', null, {})
    await queryInterface.bulkDelete('promotions_products', null, {})
  },
}

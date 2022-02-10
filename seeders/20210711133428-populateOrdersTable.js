const { v4: uuid } = require('uuid')
const attributeTypes = require('../src/Domain/Shared/interfaces/attributes/attributeTypes')

const { branchOneId } = require('./20210623221400-populateUsersTable')
const { productOneId, productTwoId, productThreeId } = require('./20210710183145-populateProductsTable')
const {
  customer1, customer2, customer3, customerAddress1, customerAddress2,
} = require('./20210711133426-populateCustomersTable')

const order1 = uuid()
const order2 = uuid()
const order3 = uuid()
const order4 = uuid()
const order5 = uuid()

const order6 = uuid()
const order7 = uuid()
const order8 = uuid()
const order9 = uuid()
const order10 = uuid()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        id: order1,
        branch_id: branchOneId,
        customer_id: customer1,
        address_id: customerAddress1,
        sub_total: 50,
        delivery_type_id: 1,
        delivery_fee: 10,
        payment_method_id: 1,
        total_price: 60,
        status: 1,
        estimated_delivery_time: '10m',
        comments: 'Entregar na portaria',
      },
      {
        id: order2,
        branch_id: branchOneId,
        customer_id: customer1,
        address_id: customerAddress2,
        sub_total: 30.22,
        delivery_type_id: 1,
        delivery_fee: 10,
        payment_method_id: 2,
        total_price: 40.22,
        status: 1,
        estimated_delivery_time: '10m',
        comments: 'Entregar na portaria',
      },
      {
        id: order3,
        branch_id: branchOneId,
        customer_id: customer2,
        sub_total: 20,
        delivery_type_id: 3,
        delivery_fee: 10,
        payment_method_id: 2,
        total_price: 30,
        status: 1,
        estimated_delivery_time: '20m',
        comments: 'Entregar na portaria',
      },
      {
        id: order4,
        branch_id: branchOneId,
        customer_id: customer2,
        sub_total: 10.32,
        delivery_type_id: 2,
        delivery_fee: 10,
        payment_method_id: 3,
        total_price: 20.32,
        status: 1,
        estimated_delivery_time: '30m',
        comments: 'Entregar na portaria',
      },
      {
        id: order5,
        branch_id: branchOneId,
        customer_id: customer3,
        sub_total: 10,
        delivery_type_id: 2,
        delivery_fee: 0,
        payment_method_id: 4,
        total_price: 10,
        status: 1,
        estimated_delivery_time: '30m',
        comments: 'Entregar na portaria',
      },

      {
        id: order6,
        branch_id: branchOneId,
        customer_id: customer3,
        sub_total: 50.22,
        delivery_type_id: 3,
        delivery_fee: 10,
        payment_method_id: 1,
        total_price: 60.22,
        status: 1,
        estimated_delivery_time: '10m',
        comments: 'Entregar na portaria',
      },
      {
        id: order7,
        branch_id: branchOneId,
        customer_id: customer1,
        address_id: customerAddress2,
        sub_total: 30.22,
        delivery_type_id: 1,
        delivery_fee: 10,
        payment_method_id: 2,
        total_price: 40.22,
        status: 1,
        estimated_delivery_time: '10m',
        comments: 'Entregar na portaria',
      },
      {
        id: order8,
        branch_id: branchOneId,
        customer_id: customer2,
        sub_total: 20.55,
        delivery_type_id: 2,
        delivery_fee: 10,
        payment_method_id: 3,
        total_price: 30.55,
        status: 1,
        estimated_delivery_time: '20m',
        comments: 'Entregar na portaria',
      },
      {
        id: order9,
        branch_id: branchOneId,
        customer_id: customer2,
        sub_total: 10.32,
        delivery_type_id: 3,
        delivery_fee: 10,
        payment_method_id: 4,
        total_price: 20.32,
        status: 1,
        estimated_delivery_time: '30m',
        comments: 'Entregar na portaria',
      },
      {
        id: order10,
        branch_id: branchOneId,
        customer_id: customer3,
        sub_total: 10.99,
        delivery_type_id: 3,
        delivery_fee: 0,
        payment_method_id: 2,
        total_price: 10.99,
        status: 1,
        estimated_delivery_time: '30m',
        comments: 'Entregar na portaria',
      },
    ])

    await queryInterface.bulkInsert('orders_products', [
      {
        order_id: order1,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            name: 'M',
            price: 10,
            quantity: 1,
          },
          {
            type: attributeTypes.additionals,
            name: 'borda queijo',
            price: 2,
            quantity: 2,
          },
          {
            type: attributeTypes.additionals,
            name: 'catchup',
            price: 0,
            quantity: 5,
          },
        ]),
      },
      {
        order_id: order1,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            name: 'P',
            price: 5,
            quantity: 1,
          },
          {
            type: attributeTypes.additionals,
            name: 'borda queijo',
            price: 2,
            quantity: 2,
          },
          {
            type: attributeTypes.additionals,
            name: 'catchup',
            price: 0,
            quantity: 5,
          },
        ]),
      },
      {
        order_id: order1,
        product_id: productTwoId,
        total_price: 10.10,
        quantity: 2,
      },
      {
        order_id: order2,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            name: 'G',
            price: 15,
            quantity: 1,
          },
          {
            type: attributeTypes.additionals,
            name: 'borda catupiry',
            price: 4,
            quantity: 2,
          },
          {
            type: attributeTypes.additionals,
            name: 'catchup',
            price: 0,
            quantity: 5,
          },
        ]),
      },
      {
        order_id: order2,
        product_id: productTwoId,
        total_price: 10.10,
        quantity: 3,
      },
      {
        order_id: order2,
        product_id: productThreeId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify([
          {
            type: attributeTypes.additionals,
            name: 'bacon',
            price: 4,
            quantity: 2,
          },
          {
            type: attributeTypes.additionals,
            name: 'carne extra',
            price: 6,
            quantity: 5,
          },
        ]),
      },
      {
        order_id: order3,
        product_id: productThreeId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify([
          {
            type: attributeTypes.additionals,
            name: 'bacon',
            price: 5,
            quantity: 3,
          },
          {
            type: attributeTypes.additionals,
            name: 'molho especial',
            price: 3,
            quantity: 2,
          },
        ]),
      },

      {
        order_id: order4,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify([
          {
            type: attributeTypes.additionals,
            name: 'molho especial',
            price: 3,
            quantity: 2,
          },
        ]),
      },
      {
        order_id: order4,
        product_id: productTwoId,
        total_price: 10.10,
        quantity: 1,
      },
      {
        order_id: order5,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            name: 'G',
            price: 15,
            quantity: 1,
          },
        ]),
      },
      {
        order_id: order5,
        product_id: productTwoId,
        total_price: 10.10,
        quantity: 1,
      },
      {
        order_id: order5,
        product_id: productThreeId,
        total_price: 10.10,
        quantity: 1,
      },
      {
        order_id: order6,
        product_id: productThreeId,
        total_price: 10.10,
        quantity: 1,
      },

      {
        order_id: order7,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            name: 'P',
            price: 5,
            quantity: 1,
          },
        ]),
      },
      {
        order_id: order7,
        product_id: productTwoId,
        total_price: 10.10,
        quantity: 3,
      },
      {
        order_id: order8,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
      },
      {
        order_id: order8,
        product_id: productTwoId,
        total_price: 10.10,
        quantity: 1,
      },
      {
        order_id: order8,
        product_id: productThreeId,
        total_price: 10.10,
        quantity: 1,
      },
      {
        order_id: order9,
        product_id: productThreeId,
        total_price: 10.10,
        quantity: 1,
      },
      {
        order_id: order10,
        product_id: productThreeId,
        total_price: 10.10,
        quantity: 1,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {})
  },
}

const uuid = require('uuid/v4');
const { orderProductsAttrFactory } = require('../src/interfaces/attributes/attributesFactory');
const attributeTypes = require('../src/interfaces/attributes/attributeTypes');
const { branchOneId } = require('./20210623221400-populateUsersTable');
const { productOneId, productTwoId, productThreeId } = require('./20210710183145-populateProductsTable');
const { customer1, customer2, customer3 } = require('./20210711133426-populateCustomersTable');

const order1 = uuid();
const order2 = uuid();
const order3 = uuid();
const order4 = uuid();
const order5 = uuid();

const order6 = uuid();
const order7 = uuid();
const order8 = uuid();
const order9 = uuid();
const order10 = uuid();



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        id: order1,
        branch_id: branchOneId,
        customer_id: customer1,
        sub_total: 50,
        delivery_type_id: 1,
        delivery_fee: 10,
        payment_method_id: 1,
        total_price: 60,
        status: 'placed',
        estimated_delivery_time: '10m',
        comments: 'Entregar na portaria',
      },
      {
        id: order2,
        branch_id: branchOneId,
        customer_id: customer1,
        sub_total: 30.22,
        delivery_type_id: 2,
        delivery_fee: 10,
        payment_method_id: 2,
        total_price: 40.22,
        status: 'placed',
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
        status: 'placed',
        estimated_delivery_time: '20m',
        comments: 'Entregar na portaria',
      },
      {
        id: order4,
        branch_id: branchOneId,
        customer_id: customer2,
        sub_total: 10.32,
        delivery_type_id: 1,
        delivery_fee: 10,
        payment_method_id: 3,
        total_price: 20.32,
        status: 'placed',
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
        status: 'placed',
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
        status: 'placed',
        estimated_delivery_time: '10m',
        comments: 'Entregar na portaria',
      },
      {
        id: order7,
        branch_id: branchOneId,
        customer_id: customer1,
        sub_total: 30.22,
        delivery_type_id: 1,
        delivery_fee: 10,
        payment_method_id: 2,
        total_price: 40.22,
        status: 'placed',
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
        status: 'placed',
        estimated_delivery_time: '20m',
        comments: 'Entregar na portaria',
      },
      {
        id: order9,
        branch_id: branchOneId,
        customer_id: customer2,
        sub_total: 10.32,
        delivery_type_id: 1,
        delivery_fee: 10,
        payment_method_id: 4,
        total_price: 20.32,
        status: 'placed',
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
        status: 'placed',
        estimated_delivery_time: '30m',
        comments: 'Entregar na portaria',
      },
    ]);

    await queryInterface.bulkInsert('orders_products', [
      {
        order_id: order1,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.sizes, 'M', 10],
            [attributeTypes.additionals, 'borda queijo', 2, 2],
            [attributeTypes.additionals, 'catchup', 0, 5]
          ])
        )
      },
      {
        order_id: order1,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.sizes, 'P', 5],
            [attributeTypes.additionals, 'borda queijo', 2, 2],
            [attributeTypes.additionals, 'catchup', 0, 5]
          ])
        )
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
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.sizes, 'G', 15],
            [attributeTypes.additionals, 'borda catupiry', 4],
            [attributeTypes.additionals, 'catchup', 0, 5]
          ])
        )
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
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.additionals, 'bacon', 5, 2],
            [attributeTypes.additionals, 'carne extra', 6, 1],
          ])
        )
      },
      {
        order_id: order3,
        product_id: productThreeId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.additionals, 'bacon', 5, 3],
            [attributeTypes.additionals, 'molho especial', 3],
          ])
        )
      },

      {
        order_id: order4,
        product_id: productOneId,
        total_price: 10.10,
        quantity: 1,
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.sizes, 'M', 10],
          ])
        )
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
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.sizes, 'P', 5],
          ])
        )
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
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.sizes, 'P', 5],
          ])
        )
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
        attributes: JSON.stringify(
          orderProductsAttrFactory([
            [attributeTypes.sizes, 'M', 10],
            [attributeTypes.additionals, 'borda catupiry', 4],
            [attributeTypes.additionals, 'catchup', 0, 5]
          ])
        )
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
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};

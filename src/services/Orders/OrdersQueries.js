/* eslint-disable class-methods-use-this */

const {
  DeliveryTypes,
  PaymentMethods,
  Customers,
  Sequelize,
  Products,
  OrdersProducts,
} = require('../../models');
const colBuilder = require('../helpers/QueryBuilders/sequelizeCol');
const QueryInterface = require('../Entities/QueryInterface');
const associationsFactory = require('../helpers/QueryBuilders/associationsFactory');
const customerAssociationsFactory = require('../helpers/defaultAssociations/customerAssociations');
const productsAssociationsFactory = require('../helpers/defaultAssociations/productsAssociations');
const { addressIds, timeStamps } = require('../helpers/exclusions');
const whereTranslator = require('../helpers/QueryBuilders/whereTranslator');

const {
  customerAssociations,
} = customerAssociationsFactory();

const {
  productsAssociations,
} = productsAssociationsFactory();

class OrderQueries extends QueryInterface {
  findAll({ query }) {
    const associations = {
      orderDeliveryType: {
        model: DeliveryTypes,
        column: 'delivery_type',
      },
      orderPaymentMethod: {
        model: PaymentMethods,
        column: 'payment_method',
      },

    };

    const includedAssociations = associationsFactory(associations);
    const { colExclude, colInclude } = colBuilder(associations);

    return {
      where: whereTranslator(query),
      attributes: {
        include: [
          ...colInclude,
        ],
        exclude: [
          ...colExclude,
          'updatedAt',
          'branchId',
          'customerId',
        ],
      },
      include: [
        ...includedAssociations,
        {
          model: OrdersProducts,
          as: 'ordersProducts',
          attributes: {
            include: [
              [Sequelize.literal('"ordersProducts->productsOrders".ingredients'), 'ingredients'],
              [Sequelize.literal('"ordersProducts->productsOrders".base_price'), 'basePrice'],
              [Sequelize.literal('"ordersProducts->productsOrders".description'), 'description'],
              [Sequelize.literal('"ordersProducts->productsOrders".name'), 'name'],
              [Sequelize.literal('"ordersProducts->productsOrders->productCategory".category_name'), 'categoryName'],
            ],
            exclude: [
              'id',
              'orderId',
            ],
          },
          include: [
            {
              model: Products,
              as: 'productsOrders',
              include: [
                ...productsAssociations,
              ],
              attributes: [],
            },
          ],
        },
        {
          model: Customers,
          as: 'customer',
          include: [
            ...customerAssociations,
          ],
          attributes: {
            include: [
              [Sequelize.literal('"customer->customerCountry".country_name'), 'countryName'],
              [Sequelize.literal('"customer->customerState".state_name'), 'stateName'],
              [Sequelize.literal('"customer->customerCity".city_name'), 'cityName'],
            ],
            exclude: [
              ...addressIds,
              ...timeStamps,
            ],
          },
        },
      ],
      order: ['createdAt'],
    };
  }
}
const OrdersQueries = new OrderQueries();

module.exports = OrdersQueries;

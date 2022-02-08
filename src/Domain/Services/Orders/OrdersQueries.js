/* eslint-disable class-methods-use-this */

const {
  DeliveryTypes,
  PaymentMethods,
  Customers,
  Sequelize,
  Products,
  OrdersProducts,
  CustomerAddresses,
  States,
  Cities,
  Countries,
} = require('../../../models');
const colBuilder = require('../helpers/QueryBuilders/sequelizeCol');
const associationsFactory = require('../helpers/QueryBuilders/associationsFactory');
const productsAssociationsFactory = require('../helpers/defaultAssociations/productsAssociations');
const { addressIds, timeStamps } = require('../helpers/exclusions');
const whereTranslator = require('../helpers/QueryBuilders/whereTranslator');
const QueryInterface = require('../BaseClasses/QueryInterface');

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
    const { colInclude } = colBuilder(associations);

    return {
      where: whereTranslator(query),
      attributes: {
        include: [
          ...colInclude,
        ],
        exclude: [
          'paymentMethodId',
          'deliveryTypeId',
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
              'addressId',
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
          model: CustomerAddresses,
          as: 'orderAddress',
          attributes: {
            include: [
              [Sequelize.literal('"orderAddress->addressCountry".country_name'), 'countryName'],
              [Sequelize.literal('"orderAddress->addressState".state_name'), 'stateName'],
              [Sequelize.literal('"orderAddress->addressCity".city_name'), 'cityName'],
            ],
            exclude: [
              'cityId',
              'countryId',
              'stateId',
              'customerId',
            ],
          },
          include: [
            {
              model: States,
              as: 'addressState',
              attributes: [],
            },
            {
              model: Countries,
              as: 'addressCountry',
              attributes: [],
            },
            {
              model: Cities,
              as: 'addressCity',
              attributes: [],
            },
          ],
        },
        {
          model: Customers,
          as: 'customer',
          attributes: {
            exclude: [
              'isActive',
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

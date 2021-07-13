/* eslint-disable class-methods-use-this */

const {
  DeliveryTypes,
  PaymentMethods,
  Customers,
  Sequelize,
} = require('../../models');
const colBuilder = require('../helpers/QueryBuilders/SequelizeCol');
const QueryInterface = require('../Entities/QueryInterface');
const associationsFactory = require('../helpers/QueryBuilders/AssociationsFactory');
const customerAssociationsFactory = require('../helpers/defaultAssociations/customerAssociations');
const { addressIds, timeStamps } = require('../helpers/exclusions');

const {
  customerAssociations,
} = customerAssociationsFactory();

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
      where: query,
      attributes: {
        include: [
          ...colInclude,
        ],
        exclude: [
          ...colExclude,
          'updatedAt',
          'branchId',
        ],
      },
      include: [
        ...includedAssociations,
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
    };
  }
}
const OrdersQueries = new OrderQueries();

module.exports = OrdersQueries;

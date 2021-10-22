/* eslint-disable class-methods-use-this */

const {
  DeliveryTypes,
  PaymentMethods,
  Customers,
  Sequelize,
  Products,
  OrdersProducts,
} = require('../../models');
const QueryInterface = require('../Entities/QueryInterface');

class MenuQueries extends QueryInterface {
// No need to be extended yet
}

const MenusQueries = new MenuQueries();

module.exports = MenusQueries;

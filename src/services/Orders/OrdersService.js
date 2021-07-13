const { Orders } = require('../../models');
const BaseService = require('../Entities/BaseService');
const OrdersQueries = require('./OrdersQueries');

class OrderService extends BaseService {
  // No need to extend it yet
}

const OrdersService = new OrderService(Orders, OrdersQueries);

module.exports = OrdersService;

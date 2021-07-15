const { Orders } = require('../../models');
const BaseService = require('../Entities/BaseService');
const OrdersQueries = require('./OrdersQueries');
const groupOrdersByStatus = require('./serializers/groupOrdersByStatus');

class OrderService extends BaseService {
  async findAll({ query }) {
    const data = await super.findAll({ query });
    return groupOrdersByStatus(data);
  }
}

const OrdersService = new OrderService(Orders, OrdersQueries);

module.exports = OrdersService;

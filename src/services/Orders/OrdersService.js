const { Orders } = require('../../models');
const BaseService = require('../Entities/BaseService');
const OrdersQueries = require('../../queries/Orders/OrdersQueries');
const groupOrdersByStatus = require('./serializers/groupOrdersByStatus');

class OrderService extends BaseService {
  async findAll({ query }) {
    // const data = await this.queries.findAll({ query });
    // return data;
    const data = await super.findAll({ query });
    return groupOrdersByStatus(data);
  }
}

const OrdersService = new OrderService(Orders, OrdersQueries);

module.exports = OrdersService;

const { Branches } = require('../../models');
const BaseService = require('../Entities/BaseService');
const OrdersQueries = require('./OrdersQueries');

class OrderService extends BaseService {
  // async findAll({ user, query }) {
  //   const data = await this.model.findAll(this.queries.findAll({ id: user.id, query }));
  //   return data;
  // }
}
const OrdersService = new OrderService(Branches, OrdersQueries);

module.exports = OrdersService;

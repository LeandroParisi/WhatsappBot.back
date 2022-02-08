const { orderStatus } = require('../../../Shared/interfaces/models/Orders');
const { camelCaseColumn } = require('../../helpers/QueryBuilders/utils');

const groupOrdersByStatus = (orders) => {
  const groupedOrders = {};

  orderStatus.forEach((status) => {
    groupedOrders[camelCaseColumn(status)] = orders
      .filter((order) => order.toJSON().status === status);
  });

  return groupedOrders;
};

module.exports = groupOrdersByStatus;

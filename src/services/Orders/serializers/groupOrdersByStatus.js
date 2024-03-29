const { camelCaseColumn } = require('../../../queries/helpers/QueryBuilders/utils');
const { orderStatus } = require('../../../interfaces/models/Orders');

const groupOrdersByStatus = (orders) => {
  const groupedOrders = {};

  orderStatus.forEach((status) => {
    groupedOrders[camelCaseColumn(status)] = orders
      .filter((order) => order.toJSON().status === status);
  });

  return groupedOrders;
};

module.exports = groupOrdersByStatus;

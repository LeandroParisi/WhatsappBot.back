const QueryInterface = require('../Entities/QueryInterface');
// const queryAttributesFactory = require('../Entities/Factories/queryAttributesFactory');

// const queries = {
//   findAll: ({ id, query }) => {
//     const attributes = queryAttributesFactory(query);
//     return { where: { user_id: id }, attributes };
//   },
// };

const OrdersQueries = new QueryInterface({});

module.exports = OrdersQueries;

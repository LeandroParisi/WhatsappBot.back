const { Sequelize } = require('../../../models');
const { camelCaseColumn } = require('./utils');

const literalBuilder = (column) => [Sequelize.literal(`'"orderProducts->OrdersProducts".${column}'`), `${column}`];

module.exports = literalBuilder;

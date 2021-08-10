const { sequelize } = require('../../../models');
const toSnakeCase = require('../../../utils/toSnakeCase');

const textFilters = new Set(['branchName']);
const booleanFilters = new Set(['isActive']);

const queryWhereFactory = (query) => {
  const sequelizedQuery = {};

  Object.entries(query).forEach(([filterName, filterValue]) => {
    if (textFilters.has(filterName)) {
      sequelizedQuery[filterName] = sequelize.where(sequelize.fn('LOWER', sequelize.col(toSnakeCase(filterName))), 'LIKE', `%${filterValue}%`);
    }
    if (booleanFilters.has(filterName)) {
      sequelizedQuery[filterName] = !!Number(filterValue);
    }
  });

  return sequelizedQuery;
};

module.exports = queryWhereFactory;

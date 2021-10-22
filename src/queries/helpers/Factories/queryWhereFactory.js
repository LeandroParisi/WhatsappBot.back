const { Op } = require('sequelize');
const { sequelize } = require('../../../models');

const toSnakeCase = require('../../../utils/toSnakeCase');

const textFilters = new Set(['branchName', 'menuName', 'description', 'name']);
const booleanFilters = new Set(['isActive']);
const rangeFilters = new Set(['basePrice', 'totalPrice']);
const fkFilters = new Set(['categoryId']);

const queryWhereFactory = (query, { table }) => {
  const sequelizedQuery = {};

  Object.entries(query).forEach(([filterName, filterValue]) => {
    if (textFilters.has(filterName)) {
      sequelizedQuery[filterName] = sequelize
        .where(
          sequelize.fn('LOWER', sequelize.col(`${table}.${toSnakeCase(filterName)}`)), 'LIKE', `%${filterValue.toLowerCase()}%`,
        );
    }
    if (booleanFilters.has(filterName)) {
      sequelizedQuery[filterName] = !!Number(filterValue);
    }
    if (rangeFilters.has(filterName)) {
      sequelizedQuery[filterName] = { [Op.between]: filterValue.split(',') };
    }
    if (fkFilters.has(filterName)) {
      sequelizedQuery[filterName] = { [Op.in]: filterValue.split(',') };
    }
  });

  return sequelizedQuery;
};

module.exports = queryWhereFactory;

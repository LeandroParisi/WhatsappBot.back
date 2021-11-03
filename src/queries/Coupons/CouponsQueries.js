/* eslint-disable class-methods-use-this */

const {
  Branches,
  Conditions,
} = require('../../models');
const QueryInterface = require('../Entities/QueryInterface');
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory');

class CouponQueries extends QueryInterface {
// No need to be extended yet
  findAll({ query }) {
    const sequelizedQuery = queryWhereFactory(query, { table: 'Coupons' });

    const mainQuery = {
      where: sequelizedQuery,
      include: [
        {
          model: Branches,
          as: 'coupomBranches',
          through: { attributes: [] },
          attributes: ['id', 'branchName'],
        },
        {
          model: Conditions,
          as: 'coupomConditions',
          through: { attributes: [] },
        },
      ],
    };

    return mainQuery;
  }
}

const CouponsQueries = new CouponQueries();

module.exports = CouponsQueries;

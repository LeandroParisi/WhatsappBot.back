/* eslint-disable class-methods-use-this */
const QueryInterface = require('../Entities/QueryInterface');
const queryAttributesFactory = require('../Entities/Factories/queryAttributesFactory');

class BranchQueries extends QueryInterface {
  findAll({ id, query }) {
    const attributes = queryAttributesFactory(query);
    return { where: { user_id: id }, attributes };
  }
}

const BranchesQueries = new BranchQueries();

module.exports = BranchesQueries;

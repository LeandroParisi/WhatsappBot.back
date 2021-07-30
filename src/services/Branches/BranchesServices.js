const rfr = require('rfr');

const { Branches } = rfr('src/models');
const BranchesQueries = rfr('src/queries/Branches/BranchesQueries');
const BaseService = require('../Entities/BaseService');

class BranchServices extends BaseService {
  async findAll({ user, query }) {
    const data = await this.model.findAll(this.queries.findAll({ id: user.id, query }));
    return data;
  }
}
const BranchesService = new BranchServices(Branches, BranchesQueries);

module.exports = BranchesService;

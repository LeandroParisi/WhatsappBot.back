const { Branches } = require('../../models');
const BaseService = require('../Entities/BaseService');
const BranchesQueries = require('./BranchesQueries');

class BranchServices extends BaseService {
  async findAll({ user, query }) {
    const data = await this.model.findAll(this.queries.findAll({ id: user.id, query }));
    return data;
  }
}
const BranchesService = new BranchServices(Branches, BranchesQueries);

module.exports = BranchesService;

const { Branches } = require('../../models');
const BaseService = require('../Entities/BaseService');
const BranchesQueries = require('./BranchesQueries');

class BranchesServices extends BaseService {

}
const BranchesService = new BaseService(Branches, BranchesQueries);

module.exports = BranchesService;

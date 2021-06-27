const { Branches } = require('../../models');
const BaseService = require('../Entities/BaseService');
const BranchesQueries = require('./BranchesQueries');

const BranchesService = new BaseService(Branches, BranchesQueries);

module.exports = BranchesService;

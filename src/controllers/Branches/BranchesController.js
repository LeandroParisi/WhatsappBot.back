const BranchesService = require('../../services/Branches/BranchesServices');
const BaseController = require('../Entities/BaseController');

const BranchesController = new BaseController('/branches', BranchesService);

module.exports = BranchesController;

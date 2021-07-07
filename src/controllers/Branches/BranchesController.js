const BranchesService = require('../../services/Branches/BranchesServices');
const BaseController = require('../Entities/BaseController');
const BranchesRoutes = require('./BranchesRoutes');

const BranchesController = new BaseController('/branches', BranchesService, BranchesRoutes.getRoutes());

module.exports = BranchesController;

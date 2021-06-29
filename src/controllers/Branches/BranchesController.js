const BranchesService = require('../../services/Branches/BranchesServices');
const BaseController = require('../Entities/BaseController');
const BaseRoutes = require('../Entities/BaseRoutes');

const BranchesRouter = new BaseRoutes();
const BranchesController = new BaseController('/branches', BranchesService, BranchesRouter.getRoutes());

module.exports = BranchesController;

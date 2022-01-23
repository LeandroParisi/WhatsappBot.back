const BranchesService = require('../../services/Branches/BranchesServices');

const BaseController = require('../Entities/BaseController');

class BranchController extends BaseController {

}

const BranchesController = new BranchController(BranchesService);

// BranchesController.removeEndpoints(['deleteOne']);
// BranchesController.addMiddlewares('all', [authenticateUser]);

module.exports = BranchesController;

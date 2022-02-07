const BranchesService = require('../Branches/BranchesServices');

const BaseController = require('../BaseClasses/BaseController');

class BranchController extends BaseController {

}

const BranchesController = new BranchController(BranchesService);

// BranchesController.removeEndpoints(['deleteOne']);
// BranchesController.addMiddlewares('all', [authenticateUser]);

module.exports = BranchesController;

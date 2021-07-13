const authenticateUser = require('../../middlewares/validations/authenticateUser');
const BranchesService = require('../../services/Branches/BranchesServices');

const BaseController = require('../Entities/BaseController');
const { _METHODS, status } = require('../../libs');
const { _resMessages } = require('../../libs');

class BranchController extends BaseController {

}

const BranchesController = new BranchController(BranchesService);

// BranchesController.removeEndpoints(['deleteOne']);
// BranchesController.addMiddlewares('all', [authenticateUser]);

module.exports = BranchesController;

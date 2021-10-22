const authenticateUser = require('../../middlewares/validations/authenticateUser');
const BranchesService = require('../../services/Branches/BranchesServices');

const BaseController = require('../Entities/BaseController');
const { _METHODS, status } = require('../../libs');
const { _resMessages } = require('../../libs');

class BranchController extends BaseController {
  async findAll(req, res) {
    const { user, query } = req;
    const data = await this.service.findAll({ user, query });
    res.status(status.ok).json({ data });
  }
}

const BranchesController = new BranchController(BranchesService);

BranchesController.addMiddlewares('all', [authenticateUser]);

module.exports = BranchesController;

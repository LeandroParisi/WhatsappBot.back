const authenticateUser = require('../../middlewares/validations/authenticateUser');
const BranchesService = require('../../services/Branches/BranchesServices');
const authenticateBotUser = require('../../middlewares/validations/authenticateBotUser');

const BaseController = require('../Entities/BaseController');
const { METHODS, status } = require('../../libs');
// const { _resMessages } = require('../../libs');

class BranchController extends BaseController {
  constructor(service) {
    super(service);

    this.newRoutes = {
      botInitialLoad: {
        endpoint: '/bot/initialLoad',
        method: METHODS.GET,
        handler: this.botInitialLoad.bind(this),
        localMiddleware: [authenticateBotUser],
      },
    };
  }

  async findAll(req, res) {
    const { user, query } = req;
    const data = await this.service.findAll({ user, query });
    res.status(status.ok).json({ data });
  }

  async botInitialLoad(req, res) {
    const { id: userId } = req.user;
    const { whatsappNumber } = req.body;

    const data = await this.service.findOne({ userId, whatsappNumber });

    res.status(status.ok).json({ ok: true, data });
  }
}

const BranchesController = new BranchController(BranchesService);

BranchesController.addRoutes(BranchesController.newRoutes);

BranchesController.addMiddlewares(
  [
    'activate',
    'deActivate',
    'findOne',
    'findByPk',
    'updateOne',
    'deleteOne',
    'findAll',
    'create',
  ],
  [authenticateUser],
);

module.exports = BranchesController;

const authenticateUser = require('../../middlewares/validations/authenticateUser');
const CouponsService = require('../../services/Coupons/CouponsService');

const BaseController = require('../Entities/BaseController');
const { METHODS, status } = require('../../libs');
const { resMessages } = require('../../libs');

class CoupomController extends BaseController {
  constructor(service) {
    super(service);

    this.newRoutes = {
      getConditions: {
        endpoint: '/conditions',
        method: METHODS.GET,
        handler: this.getConditions.bind(this),
        localMiddleware: [],
      },
    };
  }

  async getConditions(req, res) {
    const payload = req.body;
    const data = await this.service.getConditions(payload);
    res.status(status.ok).json({ data });
  }
}

const CouponsController = new CoupomController(CouponsService);

CouponsController.addRoutes(CouponsController.newRoutes);
// CouponsController.removeEndpoints(['deleteOne']);
CouponsController.addMiddlewares('all', [authenticateUser]);

module.exports = CouponsController;

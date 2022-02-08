const authenticateUser = require('../../Shared/middlewares/validations/authenticateUser');

const BaseController = require('../BaseClasses/BaseController');
const { METHODS, status } = require('../../Shared/libs');
const CouponsService = require('./CouponsService');

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
      validateCoupom: {
        endpoint: '/isValid/:branchId/:coupomCode',
        method: METHODS.GET,
        handler: this.validateCoupom.bind(this),
        localMiddleware: [],
      },
    };
  }

  async getConditions(req, res) {
    const payload = req.body;
    const data = await this.service.getConditions(payload);
    res.status(status.ok).json({ data });
  }

  async validateCoupom(req, res) {
    const data = await this.service.validateCoupom(req.params);
    res.status(status.ok).json({ data });
  }
}

const CouponsController = new CoupomController(CouponsService);

CouponsController.addRoutes(CouponsController.newRoutes);
// CouponsController.removeEndpoints(['deleteOne']);
CouponsController.addMiddlewares([
  'getConditions',
  'activate',
  'deActivate',
  'findOne',
  'findByPk',
  'updateOne',
  'deleteOne',
  'findAll',
  'create',
], [authenticateUser]);

module.exports = CouponsController;

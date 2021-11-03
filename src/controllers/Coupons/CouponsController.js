const authenticateUser = require('../../middlewares/validations/authenticateUser');
const CouponsService = require('../../services/Coupons/CouponsService');

const BaseController = require('../Entities/BaseController');
const { _METHODS, status } = require('../../libs');
const { _resMessages } = require('../../libs');

class CoupomController extends BaseController {

}

const CouponsController = new CoupomController(CouponsService);

// CouponsController.removeEndpoints(['deleteOne']);
CouponsController.addMiddlewares('all', [authenticateUser]);

module.exports = CouponsController;

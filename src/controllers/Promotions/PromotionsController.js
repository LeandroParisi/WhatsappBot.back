const authenticateUser = require('../../middlewares/validations/authenticateUser');
const PromotionsService = require('../../services/Promotions/PromotionsServices');

const BaseController = require('../Entities/BaseController');
// const { _METHODS, status } = require('../../libs');
// const { _resMessages } = require('../../libs');

class PromotionController extends BaseController {

}

const PromotionsController = new PromotionController(PromotionsService);

PromotionsController.addMiddlewares('all', [authenticateUser]);

module.exports = PromotionsController;

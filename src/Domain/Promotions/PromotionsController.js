const authenticateUser = require('../../middlewares/validations/authenticateUser');

const BaseController = require('../BaseClasses/BaseController');
const PromotionsService = require('./PromotionsServices');
// const { _METHODS, status } = require('../../libs');
// const { _resMessages } = require('../../libs');

class PromotionController extends BaseController {

}

const PromotionsController = new PromotionController(PromotionsService);

PromotionsController.addMiddlewares('all', [authenticateUser]);

module.exports = PromotionsController;

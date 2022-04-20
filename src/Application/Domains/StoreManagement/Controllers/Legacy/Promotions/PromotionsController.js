const authenticateUser = require('../Shared/middlewares/validations/authenticateUser')

const BaseController = require('../BaseClasses/BaseController')
const PromotionsService = require('./PromotionsServices')
// const { _METHODS, status } = require('../../Shared/libs');
// const { _resMessages } = require('../../Shared/libs');

class PromotionController extends BaseController {

}

const PromotionsController = new PromotionController(PromotionsService)

PromotionsController.addMiddlewares('all', [authenticateUser])

module.exports = PromotionsController

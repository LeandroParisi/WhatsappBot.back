const authenticateUser = require('../../middlewares/validations/authenticateUser');
const OrdersService = require('../../services/Orders/OrdersService');

const BaseController = require('../Entities/BaseController');
// const { _METHODS, status } = require('../../libs');
// const { _resMessages } = require('../../libs');

class OrderController extends BaseController {
  // No need to extend it yet
}

const OrdersController = new OrderController(OrdersService);

OrdersController.removeEndpoints(['deleteOne']);
OrdersController.addMiddlewares('all', [authenticateUser]);

module.exports = OrdersController;

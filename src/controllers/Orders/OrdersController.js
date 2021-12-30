const { status } = require('../../libs');
const authenticateUser = require('../../middlewares/validations/authenticateUser');
const OrdersService = require('../../services/Orders/OrdersService');

const BaseController = require('../Entities/BaseController');
// const { _METHODS, status } = require('../../libs');
// const { _resMessages } = require('../../libs');

class OrderController extends BaseController {
  async updateOne(req, res) {
    const payload = req.body;
    const { id } = req.params;
    const data = await this.service.updateOne(id, payload);
    res.status(status.ok).json({ data });
  }

  // async create() {
  // To Calc: DeliveryFee, subTotal, totalPrice
  // }
}

const OrdersController = new OrderController(OrdersService);

OrdersController.removeEndpoints(['deleteOne']);
OrdersController.addMiddlewares(
  [
    'findAll',
    'updateOne',
  ],
  [authenticateUser],
);

module.exports = OrdersController;

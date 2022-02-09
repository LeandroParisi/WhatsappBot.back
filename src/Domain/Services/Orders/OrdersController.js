const { status } = require('../../Shared/libs')
const authenticateUser = require('../../Shared/middlewares/validations/authenticateUser')

const BaseController = require('../BaseClasses/BaseController')
const OrdersService = require('./OrdersService')
// const { _METHODS, status } = require('../../Shared/libs');
// const { _resMessages } = require('../../Shared/libs');

class OrderController extends BaseController {
  async updateOne(req, res) {
    const payload = req.body
    const { id } = req.params
    const data = await this.service.updateOne(id, payload)
    res.status(status.ok).json({ data })
  }

  // async create() {
  // To Calc: DeliveryFee, subTotal, totalPrice
  // }
}

const OrdersController = new OrderController(OrdersService)

OrdersController.removeEndpoints(['deleteOne'])
OrdersController.addMiddlewares(
  [
    'findAll', // tem que manter essa rota: O front usa
    'updateOne', // tem que manter essa rota: O front usa
  ],
  [authenticateUser],
)

module.exports = OrdersController

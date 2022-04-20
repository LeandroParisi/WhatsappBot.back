const BaseController = require('../BaseClasses/BaseController')
const { METHODS, status } = require('../Shared/libs')
const CustomersService = require('./CustomersService')

class CustomerController extends BaseController {
  constructor(service) {
    super(service)

    this.newRoutes = {
      checkCustomerInfoByWhatsapp: {
        endpoint: '/bot/checkCustomer/:whatsappId',
        method: METHODS.POST,
        handler: this.CheckCustomerInfo.bind(this),
        localMiddleware: [],
      },
    }
  }

  async CheckCustomerInfo(req, res) {
    const customerInfo = req.body
    const { whatsappId } = req.params

    const data = await this.service.CheckCustomer(whatsappId, customerInfo)

    res.status(status.ok).json({ data })
  }
}

const CustomersController = new CustomerController(CustomersService)

CustomersController.addRoutes(CustomersController.newRoutes)

// BranchesController.removeEndpoints(['deleteOne']);
// BranchesController.addMiddlewares('all', [authenticateUser]);

module.exports = CustomersController

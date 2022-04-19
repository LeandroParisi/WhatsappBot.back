const BaseRouter = require('../../../../../Services/BaseClasses/BaseRouter')
const CustomersController = require('./CustomerController')

const CustomerRouter = new BaseRouter('/customers', CustomersController.getRoutes())

module.exports = CustomerRouter

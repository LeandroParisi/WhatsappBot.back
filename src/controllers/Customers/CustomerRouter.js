const BaseRouter = require('../Entities/BaseRouter');
const CustomersController = require('./CustomerController');

const CustomerRouter = new BaseRouter('/customers', CustomersController.getRoutes());

module.exports = CustomerRouter;

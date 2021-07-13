const BaseRouter = require('../Entities/BaseRouter');
const OrdersController = require('./OrdersController');

const OrdersRouter = new BaseRouter('/orders', OrdersController.getRoutes());

module.exports = OrdersRouter;

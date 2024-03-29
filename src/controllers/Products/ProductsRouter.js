const BaseRouter = require('../Entities/BaseRouter');
const ProductsController = require('./ProductsController');

const ProductsRouter = new BaseRouter('/products', ProductsController.getRoutes());

module.exports = ProductsRouter;

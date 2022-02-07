const authenticateUser = require('../../middlewares/validations/authenticateUser');

const BaseController = require('../BaseClasses/BaseController');
const { METHODS, status } = require('../../libs');
const ProductsService = require('./ProductsService');

class ProductController extends BaseController {
  constructor(service) {
    super(service);

    this.newRoutes = {
      getCategories: {
        endpoint: '/categories',
        method: METHODS.GET,
        handler: this.getCategories.bind(this),
        localMiddleware: [],
      },
    };
  }

  async getCategories(_req, res) {
    const data = await this.service.getCategories();
    res.status(status.ok).json({ data });
  }
}

const ProductsController = new ProductController(ProductsService);

ProductsController.addRoutes(ProductsController.newRoutes);
ProductsController.addMiddlewares('all', [authenticateUser]);

module.exports = ProductsController;

const authenticateUser = require('../../middlewares/validations/authenticateUser');
const ProductsService = require('../../services/Products/ProductsService');

const BaseController = require('../Entities/BaseController');
const { METHODS, status } = require('../../libs');

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

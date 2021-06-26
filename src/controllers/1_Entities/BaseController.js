const { Router } = require('express');
const { METHODS, status } = require('../../libs');
const { errorCatcher } = require('../../middlewares/errorHandler/errorHandler');

class BaseController {
  constructor(basePath, service) {
    this.router = new Router();
    this.basePath = basePath;
    this.service = service;
    this.routes = this.getBaseRoutes();
  }

  getBaseRoutes() {
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.updateOne = this.updateOne.bind(this);

    return [
      {
        endpoint: '/',
        method: METHODS.POST,
        handler: this.create,
        localMiddleware: [],
      },
      {
        endpoint: '/',
        method: METHODS.GET,
        handler: this.findAll,
        localMiddleware: [],
      },
      {
        endpoint: '/:id',
        method: METHODS.PUT,
        handler: this.updateOne,
        localMiddleware: [],
      },
      {
        endpoint: '/:id',
        method: METHODS.DELETE,
        handler: this.deleteOne,
        localMiddleware: [],
      },
    ];
  }

  setRouter() {
    this.routes.forEach((route) => {
      route.localMiddleware.forEach((middleWare) => {
        this.router.use(route.endpoint, errorCatcher(middleWare));
      });
      switch (route.method) {
        case 'GET':
          this.router.get(route.endpoint, errorCatcher(route.handler));
          break;
        case 'POST':
          this.router.post(route.endpoint, errorCatcher(route.handler));
          break;
        case 'PUT':
          this.router.put(route.endpoint, errorCatcher(route.handler));
          break;
        case 'DELETE':
          this.router.delete(route.endpoint, errorCatcher(route.handler));
          break;
        default:
            // Throw exception
      }
    });
    return this.router;
  }

  async create(req, res) {
    const data = req.body;
    const insertedEntity = await this.service.create(data);
    res.status(status.created).json({ insertedEntity });
  }

  async findAll(req, res, next) {
    console.log(this.basePath);
    console.log('base find All');
  }

  async deleteOne(req, res, next) {
    const id = req.params;
    console.log(this.basePath);
    console.log('base delete');
  }

  async updateOne(req, res, next) {
    const data = req.body;
    console.log(this.basePath);
    console.log('base update');
  }
}

module.exports = BaseController;

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
    this.findByPk = this.findByPk.bind(this);
    this.findOne = this.findOne.bind(this);
    this.updateOne = this.updateOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.activate = this.activate.bind(this);
    this.deActivate = this.deActivate.bind(this);

    return [
      {
        endpoint: '/activate/:id',
        method: METHODS.PUT,
        handler: this.activate,
        localMiddleware: [],
      },
      {
        endpoint: '/deactivate/:id',
        method: METHODS.PUT,
        handler: this.deActivate,
        localMiddleware: [],
      },
      {
        endpoint: '/find',
        method: METHODS.GET,
        handler: this.findOne,
        localMiddleware: [],
      },
      {
        endpoint: '/:id',
        method: METHODS.GET,
        handler: this.findByPk,
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
      {
        endpoint: '/',
        method: METHODS.GET,
        handler: this.findAll,
        localMiddleware: [],
      },
      {
        endpoint: '/',
        method: METHODS.POST,
        handler: this.create,
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

  // Endpoint Methods
  async create(req, res) {
    const payload = req.body;
    const insertedEntity = await this.service.create(payload);
    res.status(status.created).json({ insertedEntity });
  }

  async findAll(_req, res) {
    const data = await this.service.findAll();
    res.status(status.ok).json({ data });
  }

  async findByPk(req, res) {
    const { id } = req.params;
    const data = await this.service.findByPk(id);
    res.status(status.ok).json({ data });
  }

  async findOne(req, res) {
    const { query } = req;
    const data = await this.service.findOne(query);
    res.status(status.ok).json({ data });
  }

  async updateOne(req, res) {
    const payload = req.body;
    const { id } = req.params;
    const data = await this.service.updateOne(id, payload);
    res.status(status.ok).json({ data });
  }

  async deleteOne(req, res) {
    const { id } = req.params;
    const deletedEntity = await this.service.deleteOne(id);
    res.status(status.ok).json({ deletedEntity });
  }

  async activate(req, res) {
    const { id } = req.params;
    const data = await this.service.activate(id);
    res.status(status.ok).json({ data });
  }

  async deActivate(req, res) {
    const { id } = req.params;
    const data = await this.service.deActivate(id);
    res.status(status.ok).json({ data });
  }
}

module.exports = BaseController;

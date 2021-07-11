const { METHODS, status, resMessages } = require('../../libs');

class BaseRoutes {
  constructor(routes) {
    this.routes = {
      ...routes,
      activate: {
        endpoint: '/activate/:id',
        method: METHODS.PUT,
        handler: (service) => async (req, res) => {
          const { id } = req.params;
          const data = await service.activate(id);
          res.status(status.ok).json({ data });
        },
        localMiddleware: [],
      },
      deActivate: {
        endpoint: '/deactivate/:id',
        method: METHODS.PUT,
        handler: (service) => async (req, res) => {
          const { id } = req.params;
          const data = await service.deActivate(id);
          res.status(status.ok).json({ data });
        },
        localMiddleware: [],
      },
      findOne: {
        endpoint: '/find',
        method: METHODS.GET,
        handler: (service) => async (req, res) => {
          const { query } = req;
          const data = await service.findOne(query);
          res.status(status.ok).json({ data });
        },
        localMiddleware: [],
      },
      findByPk: {
        endpoint: '/:id',
        method: METHODS.GET,
        handler: (service) => async (req, res) => {
          const { id } = req.params;
          const data = await service.findByPk(id);
          res.status(status.ok).json({ data });
        },
        localMiddleware: [],
      },
      updateOne: {
        endpoint: '/:id',
        method: METHODS.PUT,
        handler: (service) => async (req, res) => {
          const payload = req.body;
          const { id } = req.params;
          await service.updateOne(id, payload);
          res.status(status.ok).json({ message: resMessages.updateSuccess });
        },
        localMiddleware: [],
      },
      deleteOne: {
        endpoint: '/:id',
        method: METHODS.DELETE,
        handler: (service) => async (req, res) => {
          const { id } = req.params;
          const deletedEntity = await service.deleteOne(id);
          res.status(status.ok).json({ deletedEntity });
        },
        localMiddleware: [],
      },
      findAll: {
        endpoint: '/',
        method: METHODS.GET,
        handler: (service) => async (req, res) => {
          const { user, query } = req;
          const data = await service.findAll({ user, query });
          res.status(status.ok).json({ data });
        },
        localMiddleware: [],
      },
      create: {
        endpoint: '/',
        method: METHODS.POST,
        handler: (service) => async (req, res) => {
          const payload = req.body;
          const insertedEntity = await service.create(payload);
          res.status(status.created).json({ insertedEntity });
        },
        localMiddleware: [],
      },
    };
  }

  /**
   *
   * @param {array} endpoints name of each endpoint to receive middleware,
   * like [create, deleteOne], if you want to add middleware to all routes use 'all'
   * @param {array} middlewares array containing middlewares to be added
   */
  addMiddlewares(endpoints, middlewares) {
    if (endpoints === 'all') {
      Object.keys(this.routes).forEach((endpoint) => {
        this.routes[endpoint].localMiddleware = [
          ...this.routes[endpoint].localMiddleware,
          ...middlewares,
        ];
      });
    } else {
      endpoints.forEach((endpoint) => {
        this.routes[endpoint].localMiddleware = [
          ...this.routes[endpoint].localMiddleware,
          ...middlewares,
        ];
      });
    }
  }

  removeEndpoints(endpoints) {
    endpoints.forEach((endpoint) => {
      delete this.routes[endpoint];
    });
  }

  getRoutes() {
    return this.routes;
  }
}

module.exports = BaseRoutes;

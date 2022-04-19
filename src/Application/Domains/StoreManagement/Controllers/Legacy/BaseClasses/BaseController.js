const { METHODS, status, resMessages } = require('../../Shared/libs')

class BaseController {
  constructor(service) {
    this.routes = {
      activate: {
        endpoint: '/activate/:id',
        method: METHODS.PUT,
        handler: this.activate.bind(this),
        localMiddleware: [],
      },
      deActivate: {
        endpoint: '/deactivate/:id',
        method: METHODS.PUT,
        handler: this.deActivate.bind(this),
        localMiddleware: [],
      },
      findOne: {
        endpoint: '/find',
        method: METHODS.GET,
        handler: this.findOne.bind(this),
        localMiddleware: [],
      },
      findByPk: {
        endpoint: '/:id',
        method: METHODS.GET,
        handler: this.findByPk.bind(this),
        localMiddleware: [],
      },
      updateOne: {
        endpoint: '/:id',
        method: METHODS.PUT,
        handler: this.updateOne.bind(this),
        localMiddleware: [],
      },
      deleteOne: {
        endpoint: '/:id',
        method: METHODS.DELETE,
        handler: this.deleteOne.bind(this),
        localMiddleware: [],
      },
      findAll: {
        endpoint: '/',
        method: METHODS.GET,
        handler: this.findAll.bind(this),
        localMiddleware: [],
      },
      create: {
        endpoint: '/',
        method: METHODS.POST,
        handler: this.create.bind(this),
        localMiddleware: [],
      },
    }
    this.service = service
  }

  async activate(req, res) {
    const { id } = req.params
    const data = await this.service.activate(id)
    res.status(status.ok).json({ data, message: resMessages.updateSuccess })
  }

  async deActivate(req, res) {
    const { id } = req.params
    const data = await this.service.deActivate(id)
    res.status(status.ok).json({ data, message: resMessages.updateSuccess })
  }

  async findOne(req, res) {
    const { query } = req
    const data = await this.service.findOne(query)
    res.status(status.ok).json({ data })
  }

  async findByPk(req, res) {
    const { id } = req.params
    const data = await this.service.findByPk(id)
    res.status(status.ok).json({ data })
  }

  async updateOne(req, res) {
    const payload = req.body
    const { id } = req.params
    const data = await this.service.updateOne(id, payload)
    res.status(status.ok).json({ data, message: resMessages.updateSuccess })
  }

  async deleteOne(req, res) {
    const { id } = req.params
    await this.service.deleteOne(id)
    res.status(status.ok).json({ data: 'ok', message: resMessages.deleted })
  }

  async findAll(req, res) {
    const { query, user } = req
    const data = await this.service.findAll({ query, user })
    res.status(status.ok).json({ data })
  }

  async create(req, res) {
    const { body, user } = req
    const data = await this.service.create({ body, user })
    res.status(status.created).json({ data, message: resMessages.created })
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
        ]
      })
    } else {
      endpoints.forEach((endpoint) => {
        this.routes[endpoint].localMiddleware = [
          ...this.routes[endpoint].localMiddleware,
          ...middlewares,
        ]
      })
    }
  }

  removeEndpoints(endpoints) {
    endpoints.forEach((endpoint) => {
      delete this.routes[endpoint]
    })
  }

  getRoutes() {
    return this.routes
  }

  addRoutes(newRoutes) {
    this.routes = { ...newRoutes, ...this.routes }
  }
}

module.exports = BaseController

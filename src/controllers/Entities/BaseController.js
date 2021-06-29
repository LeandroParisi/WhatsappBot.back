const { Router } = require('express');
const { errorCatcher } = require('../../middlewares/errorHandler/errorHandler');

class BaseController {
  constructor(basePath, service, routes) {
    this.router = new Router();
    this.basePath = basePath;
    this.service = service;
    this.routes = routes;
  }

  setRouter() {
    Object.values(this.routes).forEach((route) => {
      route.localMiddleware.forEach((middleWare) => {
        this.router.use(route.endpoint, errorCatcher(middleWare));
      });
      switch (route.method) {
        case 'GET':
          this.router.get(route.endpoint, errorCatcher(route.handler(this.service)));
          break;
        case 'POST':
          this.router.post(route.endpoint, errorCatcher(route.handler(this.service)));
          break;
        case 'PUT':
          this.router.put(route.endpoint, errorCatcher(route.handler(this.service)));
          break;
        case 'DELETE':
          this.router.delete(route.endpoint, errorCatcher(route.handler(this.service)));
          break;
        default:
            // Throw exception
      }
    });
    return this.router;
  }
}

module.exports = BaseController;

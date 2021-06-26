const { Router } = require('express');

export default  class Controller {
  router = new Router()

  constructor (path) {
    this.router = new Router();
    this.path = path
  }
  // Router instance for mapping routes
  // The path on which this.routes will be mapped
  public abstract path: string;
  // Array of objects which implement IRoutes interface
  protected abstract readonly routes: Array<IRoute> = [];

  public setRoutes = (): Router => {
  // Set HTTP method, middleware, and handler for each route
  // Returns Router object, which we will use in Server class
      for (const route of this.routes) {
          for (const middleWare of route.localMiddleware) {
              this.router.use(route.path, middleWare)
          };
          switch (route.method) {
              case 'GET':
                  this.router.get(route.path, route.handler);
                  break;
              case 'POST':
                  this.router.post(route.path, route.handler);
                  break;
              case 'PUT':
                  this.router.put(route.path, route.handler);
                  break;
              case 'DELETE':
                  this.router.delete(route.path, route.handler);
                  break;
              default:
                  // Throw exception
          };
      };
      return this.router;
  };
};
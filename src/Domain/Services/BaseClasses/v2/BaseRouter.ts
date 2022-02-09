import { Router } from 'express'
import RoutesPath from '../../../Shared-v2-ts/Enums/Routes'
import IRouteDefinition, { Routes } from '../../../Shared-v2-ts/Interfaces/IRouteDefinition'
import ErrorCatcher from '../../../Shared-v2-ts/Middlewares/ErrorHandler/ErrorCatcher'
import IMiddleware from '../../../Shared-v2-ts/Middlewares/Interfaces/IMiddleware'
import BaseController from './BaseController'

// const { errorCatcher } = require('../../Shared/middlewares/errorHandler/errorHandler')

export default abstract class BaseRouter<TController extends BaseController> {
  Routes : Routes

  BasePath : RoutesPath

  Router : Router

  Controller : TController

  constructor(basePath : RoutesPath) {
    this.Router = Router()
    this.BasePath = basePath
  }

  abstract CreateRoutes() : void

  protected SetRoutes(routes : Routes) {
    this.Routes = routes
  }

  protected SetRouter() : Router {
    this.CreateRoutes()
    this.Routes.forEach((route : IRouteDefinition) => {
      route.LocalMiddlewares.forEach((middleWare : IMiddleware) => {
        this.Router.use(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(middleWare.ExecuteAsync))
      })
      switch (route.Method) {
        case 'GET':
          this.Router.get(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync))
          break
        case 'POST':
          this.Router.post(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync))
          break
        case 'PUT':
          this.Router.put(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync))
          break
        case 'DELETE':
          this.Router.delete(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync))
          break
        default:
            // Throw exception
      }
    })
    return this.Router
  }
}

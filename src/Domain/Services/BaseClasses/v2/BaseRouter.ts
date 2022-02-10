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

  Controller : TController

  constructor(basePath : RoutesPath) {
    this.BasePath = basePath
  }

  abstract CreateRoutes() : void

  protected SetRoutes(routes : Routes) {
    this.Routes = routes
  }

  public SetRouter() : Router {
    const router = Router()
    console.log('Iniciando Router')
    console.log(this.BasePath)

    this.CreateRoutes()
    this.Routes.forEach((route : IRouteDefinition) => {
      route.LocalMiddlewares.forEach((middleWare : IMiddleware) => {
        router.use(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(middleWare.ExecuteAsync))
      })

      console.log('Criando Rota:')
      console.log(route.Endpoint)
      console.log(route.Method)
      console.log(route.ExecuteAsync)

      switch (route.Method) {
        case 'GET':
          router.get(
            route.Endpoint,
            ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync),
          )
          break
        case 'POST':

          router.post(route.Endpoint, route.ExecuteAsync)
          // Router.post(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync))

          break
        case 'PUT':
          // Router.put(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync()))
          break
        case 'DELETE':
          // Router.delete(route.Endpoint, ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync))
          break
        default:
            // Throw exception
      }
    })
    return router
  }
}

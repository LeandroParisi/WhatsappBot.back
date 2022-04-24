/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import RoutesPath from '../../Shared-v2-ts/Enums/RoutesPath'
import EndpointFn from '../../Shared-v2-ts/Interfaces/ExpressInterfaces/EndpointFn'
import IRouteDefinition, { Routes } from '../../Shared-v2-ts/Interfaces/IRouteDefinition'
import ErrorCatcher from '../../Shared-v2-ts/Middlewares/ErrorHandler/ErrorCatcher'
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
      console.log('Criando Rota:')
      console.log(route.Endpoint)
      console.log(route.Method)
      console.log(route.ExecuteAsync)
      console.log('\n')

      switch (route.Method) {
        case 'GET':
          router.get(
            route.Endpoint,
            ...route.LocalMiddlewares.map(
              (middleWare : EndpointFn) => ErrorCatcher.ApplyErrorCatcher(middleWare),
            ),
            ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync),
          )
          break
        case 'POST':
          router.post(
            route.Endpoint,
            ...route.LocalMiddlewares.map(
              (middleWare : EndpointFn) => ErrorCatcher.ApplyErrorCatcher(middleWare),
            ),
            ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync),
          )
          break
        case 'PUT':
          router.put(
            route.Endpoint,
            ...route.LocalMiddlewares.map(
              (middleWare : EndpointFn) => ErrorCatcher.ApplyErrorCatcher(middleWare),
            ),
            ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync),
          )
          break
        case 'DELETE':
          router.delete(
            route.Endpoint,
            ...route.LocalMiddlewares.map(
              (middleWare : EndpointFn) => ErrorCatcher.ApplyErrorCatcher(middleWare),
            ),
            ErrorCatcher.ApplyErrorCatcher(route.ExecuteAsync),
          )
          break
        default:
          throw new Error('Invalid route method')
      }
    })
    return router
  }
}

import { Router } from 'express'
import Container, { Service } from 'typedi'
import RoutesPath from '../../../Shared/Enums/RoutesPath'
import AuthenticateUser from '../../../Shared/Middlewares/Validations/AuthenticateUser'
import BaseRoute from '../../Shared/Base/BaseRoute'
import IRoute from '../../Shared/Interfaces/IRoute'
import StoreManagementController from './StoreManagementController'

@Service()
export default class StoreManagementRouter extends BaseRoute {
  BasePath: RoutesPath

  Controller : StoreManagementController

  /**
   *
   */
  constructor() {
    super(RoutesPath.STORE_MANAGEMENT)
    this.Controller = Container.get(StoreManagementController)
  }

  CreateRoute(): Router {
    this.Route.use(AuthenticateUser.ExecuteAsync)

    this.CreateCouponsRoutes()

    return this.Route
  }

  CreateCouponsRoutes() {
    this.Route.get('/coupons', this.Controller.)
  }
}

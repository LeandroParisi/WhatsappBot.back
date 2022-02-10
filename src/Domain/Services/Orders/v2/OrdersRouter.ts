import { Request, Response } from 'express'
import Container, { Service } from 'typedi'
import RoutesPath from '../../../Shared-v2-ts/Enums/Routes'
import { Routes } from '../../../Shared-v2-ts/Interfaces/IRouteDefinition'
import AuthenticateUser from '../../../Shared-v2-ts/Middlewares/Validations/AuthenticateUser'
import { METHODS } from '../../../Shared/libs'
import BaseRouter from '../../BaseClasses/v2/BaseRouter'
import OrdersController from './OrdersController'

@Service()
export default class OrdersRouter extends BaseRouter<OrdersController> {
  /**
   *
   */
  constructor(
  ) {
    super(RoutesPath.ORDERS)
    this.Controller = Container.get(OrdersController)
  }

  CreateRoutes() : void {
    const routes : Routes = [
      {
        Endpoint: '/setOrderStatus/:id/:status',
        ExecuteAsync: this.Controller.SetOrderStatus(),
        LocalMiddlewares: [AuthenticateUser],
        Method: METHODS.POST,
      },
      {
        Endpoint: '/byBranch/:branchId',
        ExecuteAsync: this.Controller.GetAllByBranchId(),
        // LocalMiddlewares: [AuthenticateUser],
        LocalMiddlewares: [],
        Method: METHODS.GET,
      },
    ]

    this.SetRoutes(routes)
  }
}

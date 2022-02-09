import Container, { Service } from 'typedi'
import RoutesPath from '../../../Shared-v2-ts/Enums/Routes'
import { Routes } from '../../../Shared-v2-ts/Interfaces/IRouteDefinition'
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
        Endpoint: 'set-order-status/:id/:status',
        ExecuteAsync: this.Controller.SetOrderStatus,
        LocalMiddlewares: [],
        Method: METHODS.POST,
      },
    ]

    this.SetRoutes(routes)
  }
}

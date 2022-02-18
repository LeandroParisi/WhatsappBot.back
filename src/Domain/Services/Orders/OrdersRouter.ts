import Container, { Service } from 'typedi'
import RoutesPath from '../../Shared-v2-ts/Enums/RoutesPath'
import { Routes } from '../../Shared-v2-ts/Interfaces/IRouteDefinition'
import AuthenticateUser from '../../Shared-v2-ts/Middlewares/Validations/AuthenticateUser'
import { METHODS } from '../../Shared/libs'
import BaseRouter from '../BaseClasses/v2/BaseRouter'

import OrdersController from './OrdersController'
import CalculateFaresValidation from './Requests/CalculateFares/Validation'
// import CalculateFaresValidation from './Requests/CalculateFares/CalculateFaresValidation'

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
        Endpoint: '/calculateFares',
        ExecuteAsync: this.Controller.CalculateFares(),
        LocalMiddlewares: [
          Container.get(CalculateFaresValidation).ExecuteAsync(),
        ],
        Method: METHODS.GET,
      },
      // TODO: generic Route
      {
        Endpoint: '/:id',
        ExecuteAsync: this.Controller.UpdateOne(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
        Method: METHODS.PUT,
      },
      {
        Endpoint: '/byBranch/:branchId',
        ExecuteAsync: this.Controller.GetAllByBranchId(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
        Method: METHODS.GET,
      },
    ]

    this.SetRoutes(routes)
  }
}

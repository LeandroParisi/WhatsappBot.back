import Container, { Service } from 'typedi'
import METHODS from '../../../../../../Domain/Shared-v2-ts/Enums/Methods'
import RoutesPath from '../../../../../../Domain/Shared-v2-ts/Enums/RoutesPath'
import { Routes } from '../../../../../../Domain/Shared-v2-ts/Interfaces/IRouteDefinition'
import AuthenticateUser from '../../../../../../Domain/Shared-v2-ts/Middlewares/Validations/AuthenticateUser'
import BaseRouter from '../BaseClasses/v2/BaseRouter'
import CouponsController from './CouponsController'

@Service()
export default class CouponsRouter extends BaseRouter<CouponsController> {
  /**
   *
   */
  constructor(
  ) {
    super(RoutesPath.COUPONS)
    this.Controller = Container.get(CouponsController)
  }

  CreateRoutes() : void {
    const routes : Routes = [
      {
        Endpoint: '/activate/:id',
        Method: METHODS.PUT,
        ExecuteAsync: this.Controller.Activate(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
      },
      {
        Endpoint: '/deactivate/:id',
        Method: METHODS.PUT,
        ExecuteAsync: this.Controller.DeActivate(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
      },
      {
        Endpoint: '/:id',
        Method: METHODS.PUT,
        ExecuteAsync: this.Controller.UpdateOne(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
      },
      {
        Endpoint: '/:id',
        Method: METHODS.DELETE,
        ExecuteAsync: this.Controller.DeleteOne(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
      },
      {
        Endpoint: '/conditions',
        Method: METHODS.GET,
        ExecuteAsync: this.Controller.GetConditions(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
      },
      {
        Endpoint: '/isValid/:branchId/:coupomCode',
        Method: METHODS.GET,
        ExecuteAsync: this.Controller.ValidateCoupom(),
        LocalMiddlewares: [],
      },
      {
        Endpoint: '/',
        Method: METHODS.GET,
        ExecuteAsync: this.Controller.FindAll(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
      },
      {
        Endpoint: '/',
        Method: METHODS.POST,
        ExecuteAsync: this.Controller.Create(),
        LocalMiddlewares: [AuthenticateUser.ExecuteAsync],
      },
    ]

    this.SetRoutes(routes)
  }
}
import Container, { Service } from 'typedi'
import METHODS from '../../Shared-v2-ts/Enums/Methods'
import RoutesPath from '../../Shared-v2-ts/Enums/RoutesPath'
import { Routes } from '../../Shared-v2-ts/Interfaces/IRouteDefinition'
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
        LocalMiddlewares: [],
      },
      {
        Endpoint: '/deactivate/:id',
        Method: METHODS.PUT,
        ExecuteAsync: this.Controller.DeActivate(),
        LocalMiddlewares: [],
      },
      {
        Endpoint: '/:id',
        Method: METHODS.PUT,
        ExecuteAsync: this.Controller.UpdateOne(),
        LocalMiddlewares: [],
      },
      {
        Endpoint: '/:id',
        Method: METHODS.DELETE,
        ExecuteAsync: this.Controller.DeleteOne(),
        LocalMiddlewares: [],
      },
      {
        Endpoint: '/conditions',
        Method: METHODS.GET,
        ExecuteAsync: this.Controller.GetConditions(),
        LocalMiddlewares: [],
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
        LocalMiddlewares: [],
      },
      {
        Endpoint: '/',
        Method: METHODS.POST,
        ExecuteAsync: this.Controller.Create(),
        LocalMiddlewares: [],
      },
    ]

    this.SetRoutes(routes)
  }
}

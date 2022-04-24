import Container, { Service } from 'typedi'
import METHODS from '../Shared-v2-ts/Enums/Methods'
import RoutesPath from '../Shared-v2-ts/Enums/RoutesPath'
import { Routes } from '../Shared-v2-ts/Interfaces/IRouteDefinition'
import BaseRouter from '../BaseClasses/v2/BaseRouter'
import CustomerAddressesController from './CustomerAddressesController'
import CreateAddressValidation from './Requests/Create/Validation'

@Service()
export default class CustomersAddressesRouter extends BaseRouter<CustomerAddressesController> {
  /**
   *
   */
  constructor(
  ) {
    super(RoutesPath.CUTOMERS_ADDRESSES)
    this.Controller = Container.get(CustomerAddressesController)
  }

  CreateRoutes() : void {
    const routes : Routes = [
      {
        Endpoint: '/',
        ExecuteAsync: this.Controller.Create(),
        LocalMiddlewares: [
          Container.get(CreateAddressValidation).ExecuteAsync(),
        ],
        Method: METHODS.POST,
      },
    ]

    this.SetRoutes(routes)
  }
}

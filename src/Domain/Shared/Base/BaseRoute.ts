import { Router } from 'express'
import RoutesPath from '../../../Shared/Enums/RoutesPath'
import IRoute from '../Interfaces/IRoute'

export default abstract class BaseRoute implements IRoute {
  BasePath: RoutesPath;

  Route: Router;

  /**
   *
   */
  constructor(basePath : RoutesPath) {
    this.BasePath = basePath
    this.Route = Router()
  }

  abstract CreateRoute() : Router
}

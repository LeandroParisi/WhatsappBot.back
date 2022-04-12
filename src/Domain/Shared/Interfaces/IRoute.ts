import { Router } from 'express'
import RoutesPath from '../../../Shared/Enums/RoutesPath'

export default interface IRoute {
  BasePath : RoutesPath
  Route : Router

  CreateRoute() : Router
}

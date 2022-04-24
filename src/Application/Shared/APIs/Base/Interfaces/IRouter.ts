import { Router } from 'express'
import RoutesPath from '../../Enums/RoutesPath'

export default interface IRouter {
  BasePath : RoutesPath
  Router : Router

  SetRouter() : Router
}

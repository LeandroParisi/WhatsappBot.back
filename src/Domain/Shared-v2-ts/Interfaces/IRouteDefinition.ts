import METHODS from '../Enums/Methods'
import IMiddleware from '../Middlewares/Interfaces/IMiddleware'
import EndpointFn from './ExpressInterfaces/EndpointFn'

export default interface IRouteDefinition {
  Endpoint: string,
  Method: string,
  ExecuteAsync: EndpointFn,
  LocalMiddlewares: Array<IMiddleware>,
}

export type Routes = Array<IRouteDefinition>

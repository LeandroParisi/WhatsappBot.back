import EndpointFn from './ExpressInterfaces/EndpointFn'

export default interface IRouteDefinition {
  Endpoint: string,
  Method: string,
  ExecuteAsync: EndpointFn,
  LocalMiddlewares: Array<EndpointFn>,
}

export type Routes = Array<IRouteDefinition>

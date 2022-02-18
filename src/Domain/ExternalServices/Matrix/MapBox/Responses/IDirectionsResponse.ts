/* eslint-disable camelcase */
export interface IRoute {
  weight_name : string
  weight : number
  duration : number
  distance : number
  legs : any
  geometry : any
}

export default interface IDirectionsResponse {
  routes : Array<IRoute>
  waypoints : Array<any>
  code : string
  uuid : string
}

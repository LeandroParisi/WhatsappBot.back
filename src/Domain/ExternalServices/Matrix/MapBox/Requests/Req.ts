/* eslint-disable camelcase */
import ICoordinates from '../../../Interfaces/ICoordinates'
import MapBoxConfig from '../Config'
import MapBoxDTO from './ReqDTO'

export const RoutingProfiles = {
  DRIVING: 'driving',
  WALKING: 'walking',
  CYCLING: 'cycling',
  DRIVING_TRAFFIC: 'driving-traffic',
} as const

export type RoutingProfilesKeys = keyof typeof RoutingProfiles;
export type RoutingProfilesValues = typeof RoutingProfiles[RoutingProfilesKeys];

export interface IParams {
  profile : RoutingProfilesValues
  coordinates : string
}

export interface IQueries {
  access_token : string
}

/* eslint-disable camelcase */
export default class MapBoxReq {
  params : IParams

  query : IQueries

  /**
   *
   */
  constructor(dto : MapBoxDTO) {
    this.query = {
      access_token: MapBoxConfig.API_KEY,
    }
    this.params = {
      coordinates: dto.coordinates.map((c : ICoordinates) => `${c.lng},${c.lat}`).join(';'),
      profile: dto.profile,
    }
  }
}

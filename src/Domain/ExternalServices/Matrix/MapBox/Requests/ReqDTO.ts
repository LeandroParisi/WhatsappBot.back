import ICoordinates from '../../../Interfaces/ICoordinates'
import { RoutingProfiles, RoutingProfilesValues } from './Req'

/* eslint-disable camelcase */
export default class MapBoxDTO {
  coordinates : Array<ICoordinates>

  profile : RoutingProfilesValues

  /**
   *
   */
  constructor(coordinates : Array<ICoordinates>, profile? : RoutingProfilesValues) {
    this.profile = profile || RoutingProfiles.DRIVING
    this.coordinates = coordinates
  }
}

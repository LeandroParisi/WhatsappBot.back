import ICoordinates from '../../../Interfaces/ICoordinates'

export interface IProvidedLocation {
  location : string
}

export interface ILocation {
  street : string,
  adminArea6 : string,
  adminArea6Type : string,
  adminArea5 : string,
  adminArea5Type : string,
  adminArea4 : string,
  adminArea4Type : string,
  adminArea3 : string,
  adminArea3Type : string,
  adminArea1 : string,
  adminArea1Type : string,
  postalCode : string,
  geocodeQualityCode : string,
  geocodeQuality : string,
  dragPoint: boolean,
  sideOfStreet: string,
  linkId: string,
  unknownInput: string,
  type: string,
  latLng: ICoordinates
  displayLatLng: ICoordinates
}

export interface IResult {
  providedLocation : IProvidedLocation
  locations : Array<ILocation>
}

export default interface IMapQuestRes {
  info: any,
  options : any,
  results : Array<IResult>
}

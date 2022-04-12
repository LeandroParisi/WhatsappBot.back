import MapQuestConfig from '../Config'

/* eslint-disable camelcase */
export default class MapQuestForwardReq {
  key : string

  location : string

  thumbMaps : boolean

  // maxResults: number

  /**
   *
   */
  constructor(location : string) {
    this.key = MapQuestConfig.API_KEY as unknown as string
    this.location = location
    this.thumbMaps = MapQuestConfig.GET_MAP
    // this.maxResults = MapQuestConfig.MAX_RESULTS
  }
}
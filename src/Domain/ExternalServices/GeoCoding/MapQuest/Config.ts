import { Service } from 'typedi'
import StaticImplements from '../../../../Shared/Anotations/StaticImplements'
import IExternalApiConfig from '../../Interfaces/IExternalApiConfig'

require('dotenv').config()

@StaticImplements<IExternalApiConfig>()
export default class MapQuestConfig {
  static API_KEY = process.env.MAP_QUEST_API_KEY

  static BASE_URL = 'http://open.mapquestapi.com/geocoding/v1/'

  static GET_MAP = false

  static MAX_RESULTS = 1
}

import { Service } from 'typedi'
import StaticImplements from '../../../../Shared/Anotations/StaticImplements'
import IExternalApiConfig from '../../Interfaces/IExternalApiConfig'

require('dotenv').config()

@StaticImplements<IExternalApiConfig>()
export default class MapBoxConfig {
  static API_KEY = process.env.MAP_BOX_API_KEY

  static BASE_URL = 'https://api.mapbox.com/'
}

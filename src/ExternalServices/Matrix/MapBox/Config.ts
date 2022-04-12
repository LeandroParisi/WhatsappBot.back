/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import StaticImplements from '../../../Shared/Anotations/StaticImplements'
import IExternalApiConfig from '../../Interfaces/IExternalApiConfig'

require('dotenv').config()

@StaticImplements<IExternalApiConfig>()
export default class MapBoxConfig {
  static API_KEY = process.env.MAP_BOX_API_KEY as unknown as string

  static BASE_URL = 'https://api.mapbox.com/'
}

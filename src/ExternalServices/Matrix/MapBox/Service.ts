import { Service } from 'typedi'
import { METHODS } from '../../../Application/Domains/StoreManagement/Controllers/Legacy/Shared/libs'
import IDirectionRoute from '../../Interfaces/IDistanceCalc'
import AssembleQuery from '../../Shared/AssembleQuery'
import Api from '../../Shared/Shared/api'
import MapBoxConfig from './Config'
import MapBoxReq from './Requests/Req'
import MapBoxDTO from './Requests/ReqDTO'
import IDirectionsResponse, { IRoute } from './Responses/IDirectionsResponse'
import MapBoxMatrixRoutes from './Routes'

export interface IOptions {
  distanceInKilometers : boolean
  durationInMinutes : boolean
}

// Documentation: https://docs.mapbox.com/ OU https://docs.mapbox.com/api/navigation/matrix/
@Service()
export default class MapBoxService {
  private readonly Api : Api

  /**
   *
   */
  constructor(
  ) {
    this.Api = new Api(MapBoxConfig.BASE_URL)
  }

  /**
   * Returns distance and time between two geographic locations
   * @param dto
   * @param options
   * @returns <IDirectionRoute>: by default distance is in KM and duration in minutes
   */
  public async GetDirections(dto : MapBoxDTO, options? : IOptions) : Promise<IDirectionRoute> {
    const definitiveOptions = MapBoxService.GetDirectionOptions(options)

    const { query, params } = new MapBoxReq(dto)

    const response = await this.Api.Request<IDirectionsResponse>(
      {
        endpoint: `${MapBoxMatrixRoutes.DIRECTIONS_V5}/${params.profile}/${params.coordinates}${AssembleQuery(query)}`,
        method: METHODS.GET,
      },
    )

    return MapBoxService.FormatResponse(definitiveOptions, response)
  }

  static FormatResponse(options: IOptions, response: IDirectionsResponse) {
    const { routes } = response

    const directionRoute : IDirectionRoute = {
      distance: (
        routes.map((r : IRoute) => r.distance).reduce((a, b) => a + b, 0) / routes.length
      ) || 0,
      duration: (
        routes.map((r : IRoute) => r.duration).reduce((a, b) => a + b, 0) / routes.length
      ) || 0,
    }

    if (options.distanceInKilometers) {
      directionRoute.distance /= 1000
    }

    if (options.durationInMinutes) {
      directionRoute.duration /= 60
    }

    directionRoute.distance = parseFloat((directionRoute.distance).toFixed(2))
    directionRoute.duration = parseFloat((directionRoute.duration).toFixed(2))

    return directionRoute
  }

  static GetDirectionOptions(options: IOptions): IOptions {
    const defaultOptions : IOptions = {
      distanceInKilometers: true,
      durationInMinutes: true,
    }

    return {
      ...defaultOptions,
      ...options,
    }
  }
}

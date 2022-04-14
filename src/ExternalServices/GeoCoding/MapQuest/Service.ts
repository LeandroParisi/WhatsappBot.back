import { Service } from 'typedi'
import { METHODS } from '../../../Application/Shared/libs'
import ICoordinates from '../../Interfaces/ICoordinates'
import AssembleQuery from '../../Shared/AssembleQuery'
import Api from '../../Shared/Shared/api'
import MapQuestConfig from './Config'
import MapQuestForwardReq from './Requests/ForwardReq'
import IMapQuestRes from './Responses/IResponse'
import MapQuestRoutes from './Routes'

export interface IOptions {
  returnCoordinates : boolean
}

@Service()
export default class MapQuestService {
  private readonly Api : Api

  /**
   *
   */
  constructor(
  ) {
    this.Api = new Api(MapQuestConfig.BASE_URL)
  }

  public async Forward(location : string, option? : IOptions) : Promise<ICoordinates> {
    const req = new MapQuestForwardReq(location)

    const returnCoordinates = option ? option.returnCoordinates : true

    const response = await this.Api.Request<IMapQuestRes>(
      {
        endpoint: `${MapQuestRoutes.FORWARD}${AssembleQuery(req)}`,
        method: METHODS.GET,
      },
    )

    if (returnCoordinates) {
      return response.results[0].locations[0].latLng
    }

    return response.results[0].locations[0].latLng
  }
}

/* eslint-disable no-param-reassign */
import { Service } from 'typedi'
import Order from '../../../Data/Entities/Models/Order'
import MapQuestService from '../../ExternalServices/GeoCoding/MapQuest/Service'
import MapBoxService from '../../ExternalServices/Matrix/MapBox/Service'
import FireError from '../../Shared-v2-ts/Abstractions/FireError'
import { ErrorMessages } from '../../Shared-v2-ts/Enums/Messages'
import { StatusCode } from '../../Shared-v2-ts/Enums/Status'
import CustomerAddressesRepositories from '../CustomerAddresses/CustomerAddressesRepository'
import OrdersRepository from './OrdersRepository'
import GetByBranchFilters from './Requests/GetAllByBranchId/DTOs/Filters'
import GetByBranchOptions from './Requests/GetAllByBranchId/DTOs/Options'
import GetByBranchParams from './Requests/GetAllByBranchId/Params'
import GetByBranchQuery from './Requests/GetAllByBranchId/Query'
import OrdersSerializer from './Serializers/OrdersSerializer'
import BranchesRepository from '../Branches/BranchesRepository'
import MapBoxDTO from '../../ExternalServices/Matrix/MapBox/Requests/ReqDTO'
import OrderCalculator from './Helpers/OrderCalculator'

@Service()
export default class OrdersHandler {
  /**
   *
   */
  constructor(
    private readonly Repository : OrdersRepository,
    private readonly Serializer : OrdersSerializer,
    private readonly AddressesRepository : CustomerAddressesRepositories,
    private readonly BranchRepository : BranchesRepository,
    private readonly DistanceCalculator : MapBoxService,
    private readonly GeoCodingService : MapQuestService,
  ) {
  }

  public async GetAllByBranchId(query : GetByBranchQuery, params : GetByBranchParams) {
    const options = new GetByBranchOptions(query)
    const orders = await this.Repository.GetAllByBranchId(new GetByBranchFilters(query, params))

    this.Serializer.GroupOrderByStatus(orders)

    return options.shouldGroup ? this.Serializer.GroupOrderByStatus(orders) : orders
  }

  public async UpdateOne(id: string, body: Order) : Promise<void> {
    const isUpdated = this.Repository.UpdateOne(id, body)

    if (!isUpdated) throw new FireError(StatusCode.NOT_FOUND, ErrorMessages.NotFound)
  }

  public async CalculateFares(body: Order) {
    const customerCoordinates = await this.AddressesRepository.GetAddressCoordinates(body.addressId)

    const branchCoordinates = await this.BranchRepository.GetBranchLocationAndFees(body.branchId)

    if (!customerCoordinates || !branchCoordinates) {
      throw new FireError(StatusCode.BAD_REQUEST, 'Branch or customer address not found')
    }

    const distance = await this.DistanceCalculator.GetDirections(
      new MapBoxDTO(
        [
          customerCoordinates,
          { lat: branchCoordinates.lat, lng: branchCoordinates.lng },
        ],
      ),
    )

    const deliveryFee = OrderCalculator.CalculateDeliveryFee(
      distance.distance, branchCoordinates.deliveryFees,
    )

    body.estimatedDeliveryDuration = distance.duration
    body.deliveryFee = deliveryFee

    return body
  }
}

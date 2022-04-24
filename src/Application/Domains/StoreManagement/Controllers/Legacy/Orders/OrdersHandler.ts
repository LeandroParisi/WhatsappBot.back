/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */
import { Service } from 'typedi'
import Order, { OrderStatus } from '../../../../../../Data/Entities/Models/Order'
import MapQuestService from '../../../../../../ExternalServices/GeoCoding/MapQuest/Service'
import MapBoxService from '../../../../../../ExternalServices/Matrix/MapBox/Service'
import FireError from '../Shared-v2-ts/Abstractions/FireError'
import { ErrorMessages } from '../Shared-v2-ts/Enums/Messages'
import { StatusCode } from '../Shared-v2-ts/Enums/Status'
import CustomerAddressesRepositories from '../CustomerAddresses/CustomerAddressesRepository'
import OrdersRepository from './OrdersRepository'
import GetByBranchFilters from './Requests/GetAllByBranchId/DTOs/Filters'
import GetByBranchOptions from './Requests/GetAllByBranchId/DTOs/Options'
import GetByBranchParams from './Requests/GetAllByBranchId/Params'
import GetByBranchQuery from './Requests/GetAllByBranchId/Query'
import OrdersSerializer from './Serializers/OrdersSerializer'
import BranchesRepository from '../Branches/BranchesRepository'
import MapBoxDTO from '../../../../../../ExternalServices/Matrix/MapBox/Requests/ReqDTO'
import OrderCalculator from './Helpers/OrderCalculator'
import DeliveryTypes from '../../../../../../Data/Entities/Enums/DeliveryTypes'
import CouponsRepository from '../Coupons/CouponsRepository'
import PromotionsRepository from '../Promotions/PromotionsRepository'
import FeeAndDuration from './Interfaces/FeeAndDuration'
import CalculatedFares from './Requests/CalculateFares/Response'
import GetByBranchAndCustomerParams from './Requests/GetAllByBranchAndCustomerId/Params'
import GetByBranchAndCustomerQuery from './Requests/GetAllByBranchAndCustomerId/Query'
import GetAllByBranchAndCustomerFilter from './Requests/GetAllByBranchAndCustomerId/DTOs/Filters'

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
    private readonly CoupomRepository : CouponsRepository,
    private readonly PromotionRepository : PromotionsRepository,

  ) {
  }

  public async GetAllByBranchId(query : GetByBranchQuery, params : GetByBranchParams) {
    const options = new GetByBranchOptions(query)
    const orders = await this.Repository.GetAllByBranchId(new GetByBranchFilters(query, params))

    this.Serializer.GroupOrderByStatus(orders)

    return options.shouldGroup ? this.Serializer.GroupOrderByStatus(orders) : orders
  }

  public async GetAllByBranchAndCustomerId(
    params: GetByBranchAndCustomerParams,
    query: GetByBranchAndCustomerQuery,
  ) : Promise<Order[]> {
    const orders = await this.Repository.GetByBranchAndCustomer(new GetAllByBranchAndCustomerFilter(query, params))
    return orders
  }

  public async UpdateOne(id: string, body: Order) : Promise<void> {
    const isUpdated = await this.Repository.UpdateOne(id, body)

    if (!isUpdated) throw new FireError(StatusCode.NOT_FOUND, ErrorMessages.NotFound)
  }

  public async CalculateFares(order: Order) : Promise<CalculatedFares> {
    const { estimatedDeliveryDuration, deliveryFee, distanceInKm } = await this.CalculateDistanceAndFee(order)

    let subTotal = 0

    if (order.promotionId) {
      subTotal = await this.GetPromotionPrice(order.promotionId)
    }

    const totalPrice = subTotal + deliveryFee

    return {
      estimatedDeliveryDuration, deliveryFee, subTotal, totalPrice, distanceInKm,
    }
  }

  public async RegisterOrder(body: Order) : Promise<void> {
    body.status = OrderStatus.PLACED

    try {
      const isCreated = await this.Repository.Insert(body)
      if (!isCreated) {
        throw new FireError(StatusCode.CONFLICT, 'Unable to create order, probably it was already created')
      }
    } catch (error) {
      throw new FireError(
        StatusCode.INTERNAL_SERVER_ERROR,
        'Unable to create order.',
        error,
      )
    }
  }

  private async GetPromotionPrice(id: number) : Promise<number> {
    const promotion = await this.PromotionRepository.FindOne({ select: ['*'], where: { id } })
    return promotion.totalPrice
  }

  private async CalculateDistanceAndFee(body: Order) : Promise<FeeAndDuration> {
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

    const deliveryFee = body.deliveryTypeId === DeliveryTypes.DELIVERY
      ? OrderCalculator.CalculateDeliveryFee(
        distance.distance, branchCoordinates.deliveryFees,
      )
      : 0

    return { estimatedDeliveryDuration: distance.duration, deliveryFee, distanceInKm: distance.distance }
  }
}

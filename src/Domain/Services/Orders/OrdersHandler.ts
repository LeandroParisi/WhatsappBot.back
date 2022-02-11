import { Service } from 'typedi'
import Order from '../../../Data/Entities/Models/Order'
import FireError from '../../Shared-v2-ts/Abstractions/FireError'
import { ErrorMessages } from '../../Shared-v2-ts/Enums/Messages'
import { StatusCode } from '../../Shared-v2-ts/Enums/Status'
import OrdersRepository from './OrdersRepository'
import GetByBranchFilters from './Requests/GetAllByBranchId/DTOs/Filters'
import GetByBranchOptions from './Requests/GetAllByBranchId/DTOs/Options'
import GetByBranchParams from './Requests/GetAllByBranchId/Params'
import GetByBranchQuery from './Requests/GetAllByBranchId/Query'
import OrdersSerializer from './Serializers/OrdersSerializer'

@Service()
export default class OrdersHandler {
  /**
   *
   */
  constructor(
    private readonly Repository : OrdersRepository,
    private readonly Serializer : OrdersSerializer,
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

  // async FindAll({ query }) {
  //   const data = await super.findAll({ query });
  //   return groupOrdersByStatus(data);
  // }
}

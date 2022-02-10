import { Service } from 'typedi'
import { OrderStatus } from '../../../../Data/Entities/Models/Order'
import groupOrdersByStatus from '../serializers/groupOrdersByStatus'
import OrdersRepository from './OrdersRepository'
import GetOrdersFilters from './Requests/GetAllByBranchId/DTOs/Filters'
import GetOrdersOptions from './Requests/GetAllByBranchId/DTOs/Options'
import GetOrdersParam from './Requests/GetAllByBranchId/Params'
import GetOrdersQuery from './Requests/GetAllByBranchId/Query'
import { SetOrderDTO } from './Requests/SetOrderStatusReq'
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

  public async GetAllByBranchId(query : GetOrdersQuery, params : GetOrdersParam) {
    const options = new GetOrdersOptions(query)
    const orders = await this.Repository.GetAllByBranchId(new GetOrdersFilters(query, params))

    this.Serializer.GroupOrderByStatus(orders)

    return options.shouldGroup ? this.Serializer.GroupOrderByStatus(orders) : orders
  }

  public async SetOrderStatus(id: string, status: OrderStatus) {
    const updatePayload = new SetOrderDTO(status)

    const teste = await this.Repository.UpdateOne(id, updatePayload)
  }
  // async FindAll({ query }) {
  //   const data = await super.findAll({ query });
  //   return groupOrdersByStatus(data);
  // }
}

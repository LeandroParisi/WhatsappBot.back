import { Service } from 'typedi'
import { OrderStatus } from '../../../../Data/Entities/Models/Order'
import OrdersRepository from './OrdersRepository'
import { GetOrdersDTO, QueryAllOrdersQuery } from './Requests/GetAllOrdersReq'
import { SetOrderDTO } from './Requests/SetOrderStatusReq'

@Service()
export default class OrdersHandler {
  /**
   *
   */
  constructor(
    private readonly Repository : OrdersRepository,
  ) {
  }

  public async GetAll(query : QueryAllOrdersQuery) {
    const payload = new GetOrdersDTO(query)
    const orders = await this.Repository.GetAll(payload)
    console.log({ orders })
    return orders
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

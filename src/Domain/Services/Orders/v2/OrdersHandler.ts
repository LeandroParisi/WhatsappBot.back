import { Service } from 'typedi'
import { OrderStatus } from '../../../../Data/Models/Order'
import OrdersRepository from './OrdersRepository'
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

  public async SetOrderStatus(id: string, status: OrderStatus) {
    const updatePayload = new SetOrderDTO(status)

    const teste = await this.Repository.UpdateOne(id, updatePayload)
  }
  // async FindAll({ query }) {
  //   const data = await super.findAll({ query });
  //   return groupOrdersByStatus(data);
  // }
}

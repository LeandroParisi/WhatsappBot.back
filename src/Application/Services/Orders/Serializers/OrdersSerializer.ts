/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable eqeqeq */
import { Service } from 'typedi'
import { OrderStatus, OrderStatusValues } from '../../../../Data/Entities/Models/Order'
import IDictionary from '../../../../Commons/Interfaces/SystemInterfaces/IDictionary'

@Service()
export default class OrdersSerializer {
  GroupOrderByStatus(orders: any) {
    const groupedOrders : IDictionary<object> = {}

    const orderStatus : Array<OrderStatusValues> = Object.values(OrderStatus)

    orderStatus.forEach((status) => {
      groupedOrders[status] = orders
        .filter((order : any) => order.toJSON().status == status)
    })

    return groupedOrders
  }
}

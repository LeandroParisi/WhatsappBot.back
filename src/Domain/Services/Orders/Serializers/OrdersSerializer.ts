/* eslint-disable eqeqeq */
import { Service } from 'typedi'
import Order, { OrderStatus } from '../../../../../Data/Entities/Models/Order'
import SystemExtensions from '../../../../Shared-v2-ts/ExtensionMethods/SystemExtensions'
import IDictionary from '../../../../Shared-v2-ts/Interfaces/SystemInterfaces/IDictionary'

@Service()
export default class OrdersSerializer {
  GroupOrderByStatus(orders: any) {
    const groupedOrders : IDictionary<object> = {}

    const orderStatus = SystemExtensions.GetEnumValues(OrderStatus)

    orderStatus.forEach((status) => {
      groupedOrders[status] = orders
        .filter((order : any) => order.toJSON().status == status)
    })

    return groupedOrders
  }
}

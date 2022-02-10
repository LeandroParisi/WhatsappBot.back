import { Service } from 'typedi'
import KnexConnectionFactory from '../../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'

import { SetOrderDTO } from './Requests/SetOrderStatusReq'

import OrdersRepositoryAdapter from './OrdersRepositoryAdapter'
import GetOrdersFilters from './Requests/GetAllByBranchId/DTOs/Filters'

@Service()
export default class OrdersRepository {
  Adapter : any

  /**
   *
   */
  constructor() {
    this.Adapter = OrdersRepositoryAdapter
  }

  async GetAllByBranchId(query: GetOrdersFilters) {
    const { branchId, status } = query

    const products = await OrdersRepositoryAdapter.GetAll(branchId, status)

    return products
  }

  async UpdateOne(id: string, updatePayload: SetOrderDTO) {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection('orders')
      .update(updatePayload)
      .where('id', id)

    await updateQuery
  }
}

import { Service } from 'typedi'
import KnexConnectionFactory from '../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'
import Tables from '../../../Data/Entities/Enums/Tables'
import Order from '../../../Data/Entities/Models/Order'
import BaseRepository, { FindOptions } from '../BaseClasses/v2/BaseRepository'

import OrdersSequelizeAdapter from './OrdersSequelizeAdapter'
import GetOrdersFilters from './Requests/GetAllByBranchId/DTOs/Filters'

@Service()
export default class OrdersRepository extends BaseRepository<Order> {
  Adapter : any

  /**
   *
   */
  constructor() {
    super(Tables.ORDERS)
    this.Adapter = OrdersSequelizeAdapter
  }

  async GetAllByBranchId(query: GetOrdersFilters) {
    const { branchId, status } = query

    const products = await OrdersSequelizeAdapter.GetAll(branchId, status)

    return products
  }

  async UpdateOne(id: string, updatePayload: Order) : Promise<boolean> {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection('orders')
      .update(updatePayload)
      .where('id', id)

    const result = await updateQuery

    return result === 1
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Service } from 'typedi'
import KnexConnectionFactory from '../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'
import Tables from '../../../Data/Entities/Enums/Tables'
import Order from '../../../Data/Entities/Models/Order'
import BaseRepository from '../BaseClasses/v2/BaseRepository'

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

    const products = await this.Adapter.GetAll(branchId, status)

    return products
  }

  async UpdateOne(id: string, updatePayload: Order) : Promise<boolean> {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection(this.Table)
      .update(updatePayload)
      .where('id', id)

    const result = await updateQuery

    return result === 1
  }
}

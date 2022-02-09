import { Service } from 'typedi'
import KnexConnectionFactory from '../../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'
import { SetOrderDTO } from './Requests/SetOrderStatusReq'

@Service()
export default class OrdersRepository {
  async UpdateOne(id: string, updatePayload: SetOrderDTO) {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection('orders').update(updatePayload).where('id', id)

    await updateQuery
  }
}

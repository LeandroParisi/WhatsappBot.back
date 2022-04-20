import { Service } from 'typedi'
import KnexConnectionFactory from '../../../../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'
import Tables from '../../../../../../Data/Entities/Enums/Tables'
import Address from '../../../../../../Data/Entities/Models/Address'
import ICoordinates from '../../../../../../ExternalServices/Interfaces/ICoordinates'
import BaseRepository from '../BaseClasses/v2/BaseRepository'

@Service()
export default class CustomerAddressesRepository extends BaseRepository<Address> {
  /**
   *
   */
  constructor() {
    super(Tables.CUSTOMER_ADDRESSES)
  }

  async GetAddressCoordinates(id: string) : Promise<ICoordinates> {
    const select = ['lat', 'lng']

    const foundEntity = await super.FindOne({ where: { id }, select })

    return foundEntity as ICoordinates
  }
}

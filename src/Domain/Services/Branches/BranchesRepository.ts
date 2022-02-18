import { Service } from 'typedi'
import KnexConnectionFactory from '../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'
import Tables from '../../../Data/Entities/Enums/Tables'
import Address from '../../../Data/Entities/Models/Address'
import Branch, { DeliveryFees } from '../../../Data/Entities/Models/Branch'
import ICoordinates from '../../ExternalServices/Interfaces/ICoordinates'
import BaseRepository from '../BaseClasses/v2/BaseRepository'

export interface LocationAndFees {
  lat : number,
  lng: number,
  deliveryFees: DeliveryFees
}

@Service()
export default class BranchesRepository extends BaseRepository<Branch> {
  /**
   *
   */
  constructor() {
    super(Tables.BRANCHES)
  }

  async GetBranchLocationAndFees(id: string) : Promise<LocationAndFees> {
    const select = ['lat', 'lng', 'delivery_fees']

    const foundEntity = await super.FindOne({ where: { id }, select })

    return foundEntity as LocationAndFees
  }
}

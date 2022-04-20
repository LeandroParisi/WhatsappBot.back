import { Service } from 'typedi'
import Tables from '../../../../../../Data/Entities/Enums/Tables'
import Branch, { DeliveryFees } from '../../../../../../Data/Entities/Models/Branch'
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

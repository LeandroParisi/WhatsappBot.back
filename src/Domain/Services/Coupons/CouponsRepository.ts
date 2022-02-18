import { Service } from 'typedi'
import Tables from '../../../Data/Entities/Enums/Tables'
import Coupom from '../../../Data/Entities/Models/Coupom'
import BaseRepository from '../BaseClasses/v2/BaseRepository'
import CouponsSequelizeAdapter from './CouponsSequelizeAdapter'
import FindAllCouponsQuery from './Requests/FindAll/Query'

@Service()
export default class CouponsRepository extends BaseRepository<Coupom> {
  Adapter : any

  /**
   *
   */
  constructor() {
    super(Tables.COUPONS)
    this.Adapter = CouponsSequelizeAdapter
  }

  async FindAll(query: FindAllCouponsQuery) : Promise<Coupom[]> {
    return await this.Adapter.FindAll(query) as Coupom[]
  }

  async GetConditions() : Promise<any> {
    return await this.Adapter.GetConditions() as any
  }

  async ValidateCoupom() : Promise<any> {
    return await this.Adapter.GetCoupomByCodeAndBranch() as any
  }

  async UpdateOne(id : string, payload : Coupom) : Promise<any> {
    return await this.Adapter.UpdateOne(id, payload) as any
  }
}

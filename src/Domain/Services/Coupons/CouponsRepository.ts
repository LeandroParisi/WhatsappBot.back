import { Service } from 'typedi'
import KnexConnectionFactory from '../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'
import Tables from '../../../Data/Entities/Enums/Tables'
import Coupom from '../../../Data/Entities/Models/Coupom'
import BaseRepository from '../BaseClasses/v2/BaseRepository'
import CouponsSequelizeAdapter from './CouponsSequelizeAdapter'
import FindAllCouponsQuery from './Requests/FindAll/Query'
import ValidateCoupomParams from './Requests/ValidateCoupom/Params'

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

  async GetCoupomByCode(params: ValidateCoupomParams) : Promise<Coupom | undefined> {
    const dbConnection = KnexConnectionFactory.Create()

    console.log({ params })

    const select = dbConnection(this.Table)
      .select('*')
      .innerJoin('coupons_branches', 'coupons_branches.coupom_id', 'coupons.id')
      .whereRaw('LOWER(coupom_code) LIKE ?', [`%${params.coupomCode.toLowerCase()}%`])
      .andWhere('coupons_branches.branch_id', params.branchId)
      .first()

    const result = await select

    if (!result) return undefined
    return result
  }

  async UpdateOne(id : string, payload : Coupom) : Promise<any> {
    return await this.Adapter.UpdateOne(id, payload) as any
  }
}

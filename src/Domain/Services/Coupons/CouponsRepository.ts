import { Service } from 'typedi'
import Tables from '../../../Data/Entities/Enums/Tables'
import Coupom from '../../../Data/Entities/Models/Coupom'
import BaseRepository from '../BaseClasses/v2/BaseRepository'
import CouponsSequelizeAdapter from './CouponsSequelizeAdapter'

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
}

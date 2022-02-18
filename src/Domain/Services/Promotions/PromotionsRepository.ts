import { Service } from 'typedi'
import Tables from '../../../Data/Entities/Enums/Tables'
import Promotion from '../../../Data/Entities/Models/Promotion'
import BaseRepository from '../BaseClasses/v2/BaseRepository'

@Service()
export default class PromotionsRepository extends BaseRepository<Promotion> {
  /**
   *
   */
  constructor() {
    super(Tables.PROMOTIONS)
  }
}

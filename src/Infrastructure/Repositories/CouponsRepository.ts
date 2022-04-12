import { coupons } from 'zapatos/schema'
import BaseRepository from './Base/BaseRepository'

export default class CouponsRepository extends BaseRepository
<
  coupons.Whereable,
  coupons.Updatable,
  coupons.Insertable
> {
  /**
   *
   */
  constructor() {
    super('coupons')
  }
}

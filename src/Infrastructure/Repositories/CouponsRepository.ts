/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../StaticFiles/Schemas/zapatos/schema.d.ts" />

import { Service } from 'typedi'
import type * as s from 'zapatos/schema'

@Service()
export default class CouponsRepository extends BaseRepository
<
  s.coupons.Selectable,
  s.coupons.Whereable,
  s.coupons.Updatable,
  s.coupons.Insertable
> {
  /**
   *
   */
  constructor() {
    super('coupons')
  }
}

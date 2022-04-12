/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../StaticFiles/Schemas/zapatos/schema.d.ts" />

import { Service } from 'typedi'
import type * as s from 'zapatos/schema'
import BaseRepository from './Base/BaseRepository'

@Service()
export default class CouponsRepository extends BaseRepository
<
  s.coupons.Whereable,
  s.coupons.Updatable,
  s.coupons.Insertable,
  s.coupons.Selectable
> {
  /**
   *
   */
  constructor() {
    super('coupons')
  }
}

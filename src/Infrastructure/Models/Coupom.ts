/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../StaticFiles/Schemas/zapatos/schema.d.ts" />
import { enum_coupons_discount_type } from 'zapatos/schema'

export default class Coupom {
  id: number;

  coupomCode: string;

  discountType: enum_coupons_discount_type;

  discount: number;

  used: number | null;

  priceLimit: number | null;

  dateLimit: Date | null;

  distanceLimitInKm: number | null;

  usesLimit: number | null;

  freeDelivery: boolean;

  isActive: boolean;

  updatedAt: Date | null;

  createdAt: Date | null;
}

export default class Coupom {
  id: number

  coupomCode: string

  // TODO: no banco está como enum
  discountType: string

  discount: number

  used: number

  priceLimit?: number

  dateLimit?: string

  distanceLimitInKm?: number

  usesLimit?: number

  freeDelivery: boolean

  isActive: boolean

  updatedAt : string

  createdAt : string
}

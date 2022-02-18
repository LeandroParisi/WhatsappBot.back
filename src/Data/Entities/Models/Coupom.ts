export default class Coupom {
  id: number

  coupomCode: string

  // TODO: no banco está como enum
  discountType: string

  discount: number

  used?: number

  priceLimit?: number

  dateLimit?: string

  distanceLimit?: number

  usesLimit?: number

  isActive: boolean

  updatedAt : string

  createdAt : string
}

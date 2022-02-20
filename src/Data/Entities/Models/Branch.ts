import DeliveryFeeTypes from '../Enums/DeliveryFeeTypes'

export interface UniqueDeliveryFee {
  type: typeof DeliveryFeeTypes.UNIQUE,
  fees: number
}

export interface CompositeDeliveryFee {
  type: typeof DeliveryFeeTypes.RADIUS,
  // In this case it will be an Array of array: [ [ distance, value ] ]
  fees: Array<Array<number>>
}

export type DeliveryFees = UniqueDeliveryFee | CompositeDeliveryFee

export default class Branch {
  id: string

  userId: string

  whatsappNumber: string

  whatsappId: string

  managerName: string

  branchName: string

  countryId: number

  stateId: number

  cityId: number

  neighborhood: string

  street: string

  streetNumber: string

  streetComplement: string

  postalCode: string

  lat: number

  lng: number

  deliveryFees: DeliveryFees

  logo: string

  isActive: boolean

  createdAt? : string

  updatedAt? : string
}

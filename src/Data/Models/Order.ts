/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
export enum OrderStatus {
  PLACED = 'placed',
  IN_PRODUCTION = 'in_production',
  DISPATCHED = 'dispatched',
  FULLFILLED = 'fullfilled',
}

export default class Order {
  id : string

  branchId : string

  customerId : string

  addressId : string

  orderNumber : number

  subTotal : number

  deliveryTypeId : number

  deliveryFee : number

  paymentMethodId : number

  discount : number

  totalPrice : number

  status : OrderStatus

  coupomId : number

  promotionId : number

  estimatedDeliveryTime : string

  comments : string

  dispatchTime : Date

  deliveryTime : Date
}

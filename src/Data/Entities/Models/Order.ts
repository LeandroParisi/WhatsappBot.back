/* eslint-disable max-classes-per-file */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */

export enum OrderStatus {
  PLACED = 1,
  IN_PRODUCTION = 2,
  DISPATCHED = 3,
  FULLFILLED = 4,
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

  // TODO
  status : number

  coupomId? : number

  promotionId? : number

  estimatedDeliveryDuration? : number

  distanceInKm: number

  comments? : string

  dispatchTime? : string

  deliveryTime? : string

  createdAt? : string

  updatedAt? : string
}

// class OrderValidator extends Validator<Order> {
//   /**
//    *
//    */
//   constructor() {
//     super()
//     this.ruleFor('id')
//       .notEmpty()

//     this.ruleFor('addressId')
//       .notEmpty()

//     this.ruleFor('branchId')
//       .notEmpty()
//   }
// }

/* eslint-disable consistent-return */
import DeliveryFeeTypes from '../../../../Data/Entities/Enums/DeliveryFeeTypes'
import { DeliveryFees } from '../../../../Data/Entities/Models/Branch'
import StaticImplements from '../../../../Shared/Anotations/StaticImplements'

@StaticImplements()
export default class OrderCalculator {
  static CalculateDeliveryFee(distance: number, deliveryFees: DeliveryFees) : number {
    if (deliveryFees.type === DeliveryFeeTypes.UNIQUE) {
      return deliveryFees.fees
    }

    let feeValue = -1
    deliveryFees.fees.forEach(([distanceThreshold, value], index : number) => {
      if (distance >= distanceThreshold && index === deliveryFees.fees.length - 1) {
        feeValue = value
      }
      if (distance <= distanceThreshold) {
        feeValue = value
      }
    })

    return feeValue
  }
}

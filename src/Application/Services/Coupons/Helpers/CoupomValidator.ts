/* eslint-disable max-len */
import Coupom from '../../../../Data/Entities/Models/Coupom'
import StaticImplements from '../../../../Commons/Anotations/StaticImplements'
import GenericParser from '../../../../Commons/Parsers/GenericParser'
import DaysUtils from '../../../../Commons/Utils/DateUtils'
import { CoupomValidation } from '../Interfaces/ValidatedCoupom'
import ValidateCoupomBody from '../Requests/ValidateCoupom/Body'

@StaticImplements()
export default class CoupomValidator {
  static IsCoupomValid(coupom: Coupom, body: ValidateCoupomBody): CoupomValidation {
    const validations : boolean[] = []
    const validationMessages = []

    if (coupom.usesLimit) {
      const isValid = CoupomValidator.ValidateUsesLimit(coupom.used, coupom.usesLimit)
      if (!isValid) validationMessages.push('Já alcançou o limite de utilizações')
      validations.push(isValid)
    }

    if (coupom.dateLimit) {
      const isValid = CoupomValidator.ValidateDateLimit(coupom.dateLimit)
      if (!isValid) validationMessages.push('Data de validade expirada')
      validations.push(isValid)
    }

    if (coupom.distanceLimitInKm) {
      const isValid = CoupomValidator.ValidateDistancelimit(body.distanceInKm, coupom.distanceLimitInKm)
      if (!isValid) {
        validationMessages.push(
          `Sua entrega tem uma distância de ${body.distanceInKm}Km, este cupom só é válido até ${coupom.distanceLimitInKm}Km`,
        )
      }
      validations.push(isValid)
    }

    if (coupom.priceLimit) {
      const isValid = CoupomValidator.ValidatePriceLimit(body.subTotal, coupom.priceLimit)
      if (!isValid) {
        validationMessages.push(
          `Sua compra tem um valor de ${GenericParser.FormatPrice({ price: body.subTotal })}, mas este cupom somente é válido para compras até ${GenericParser.FormatPrice({ price: coupom.priceLimit })}`,
        )
      }
      validations.push(isValid)
    }

    return { isValid: validations.every((v : boolean) => v), validationMessages }
  }

  static ValidatePriceLimit(subTotal: number, priceLimit: number): boolean {
    return subTotal <= priceLimit
  }

  static ValidateDistancelimit(distanceInKm: number, distanceLimitInKm: number): boolean {
    return distanceInKm <= distanceLimitInKm
  }

  static ValidateDateLimit(dateLimit: string): boolean {
    const dateNow = new Date(DaysUtils.DateNow())
    const limitDate = DaysUtils.GetDateFromDbString(dateLimit)

    return dateNow <= limitDate
  }

  static ValidateUsesLimit(used: number, usesLimit: number): boolean {
    return used + 1 <= usesLimit
  }
}

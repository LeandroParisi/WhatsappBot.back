/* eslint-disable max-len */
import { Service } from 'typedi'
import Coupom from '../../../Data/Entities/Models/Coupom'
import GenericParser from '../../../Shared/Parsers/GenericParser'
import { StatusCode } from '../../Shared-v2-ts/Enums/Status'
import { FireError } from '../../Shared/middlewares/errorHandler/errorHandler'
import CouponsRepository from './CouponsRepository'
import CoupomValidator from './Helpers/CoupomValidator'
import ValidatedCoupom, { CoupomValidation } from './Interfaces/ValidatedCoupom'
import FindAllCouponsQuery from './Requests/FindAll/Query'
import ValidateCoupomBody from './Requests/ValidateCoupom/Body'
import ValidateCoupomParams from './Requests/ValidateCoupom/Params'

@Service()
export default class CouponsHandler {
  /**
   *
   */
  constructor(
    private readonly Repository : CouponsRepository,
  ) {
  }

  async Activate(id: string) : Promise<void> {
    const isUpdated = await this.Repository.Activate(id)

    if (!isUpdated) throw new FireError(StatusCode.NOT_FOUND, 'Coupom not found')
  }

  async DeActivate(id: string) {
    const isUpdated = await this.Repository.DeActivate(id)

    if (!isUpdated) throw new FireError(StatusCode.NOT_FOUND, 'Coupom not found')
  }

  async UpdateOne(id: string, payload: Coupom) {
    const isUpdated = await this.Repository.UpdateOne(id, payload)

    if (!isUpdated) throw new FireError(StatusCode.INTERNAL_SERVER_ERROR, 'Problem inserting coupom')
  }

  async DeleteOne(id: string) {
    const isUpdated = await this.Repository.DeleteOne(id)

    if (!isUpdated) throw new FireError(StatusCode.INTERNAL_SERVER_ERROR, 'Problem deleting coupom')
  }

  async Create(payload: Coupom) {
    const isUpdated = await this.Repository.Insert(payload)

    if (!isUpdated) throw new FireError(StatusCode.INTERNAL_SERVER_ERROR, 'Problem inseting coupom')
  }

  async FindAll(query: FindAllCouponsQuery) : Promise<Coupom[]> {
    return await this.Repository.FindAll(query)
  }

  async GetConditions() {
    return await this.Repository.GetConditions()
  }

  // teste
  async ValidateCoupom(params: ValidateCoupomParams, body : ValidateCoupomBody) : Promise<ValidatedCoupom> {
    const coupom = await this.Repository.GetCoupomByCode(params)

    if (!coupom) {
      return { isValid: false }
    }

    const { isValid, validationMessages } = CoupomValidator.IsCoupomValid(coupom, body)

    if (isValid) {
      return { isValid: true, id: coupom.id, freeDelivery: coupom.freeDelivery }
    }
    return { isValid: false, validationMessages }
  }
}

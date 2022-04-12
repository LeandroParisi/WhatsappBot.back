/* eslint-disable max-len */
import { Service } from 'typedi'
import PgConnectionFactory from '../../../Infrastructure/DbConnections/PgConnectionFactory'
import CouponsRepository from '../../../Infrastructure/Repositories/CouponsRepository'
import FireError from '../../../Shared/Abstractions/FireError'
import { StatusCode } from '../../../Shared/Enums/Status'

@Service()
export default class CouponsService {
  /**
   *
   */
  constructor(
    private readonly Repository : CouponsRepository,
  ) {
  }

  // async Activate(id: number) : Promise<void> {
  //   const pool = PgConnectionFactory.Create()
  //   const isUpdated = await this.Repository.Update({ is_active: true }, { id }, pool)

  //   if (!isUpdated) throw new FireError(StatusCode.NOT_FOUND, 'Coupom not found')
  // }

  // async DeActivate(id: number) {
  //   const pool = PgConnectionFactory.Create()
  //   const isUpdated = await this.Repository.Update({ is_active: false }, { id }, pool)

  //   if (!isUpdated) throw new FireError(StatusCode.NOT_FOUND, 'Coupom not found')
  // }

  // async UpdateOne(id: number, payload: Coupom) {
  //   const isUpdated = await this.Repository.UpdateOne(id, payload)

  //   if (!isUpdated) throw new FireError(StatusCode.INTERNAL_SERVER_ERROR, 'Problem inserting coupom')
  // }

  // async DeleteOne(id: string) {
  //   const isUpdated = await this.Repository.DeleteOne(id)

  //   if (!isUpdated) throw new FireError(StatusCode.INTERNAL_SERVER_ERROR, 'Problem deleting coupom')
  // }

  async Create() {
    const pool = PgConnectionFactory.Create()

    const created = await this.Repository.Create({ coupom_code: '123', discount: 10, discount_type: 'absolute_value' }, pool)

    if (!created) throw new FireError(StatusCode.INTERNAL_SERVER_ERROR, 'Problem inseting coupom')

    return created
  }

  // async FindAll(query: FindAllCouponsQuery) : Promise<Coupom[]> {
  //   return await this.Repository.FindAll(query)
  // }

  // async GetConditions() {
  //   return await this.Repository.GetConditions()
  // }

  // teste
  // async ValidateCoupom(params: ValidateCoupomParams, body : ValidateCoupomBody) : Promise<ValidatedCoupom> {
  //   const coupom = await this.Repository.GetCoupomByCode(params)

  //   if (!coupom) {
  //     return { isValid: false }
  //   }

  //   const { isValid, validationMessages } = CoupomValidator.IsCoupomValid(coupom, body)

  //   if (isValid) {
  //     return { isValid: true, id: coupom.id, freeDelivery: coupom.freeDelivery }
  //   }
  //   return { isValid: false, validationMessages }
  // }
}

import { Service } from 'typedi'
import Coupom from '../../../Data/Entities/Models/Coupom'
import { StatusCode } from '../../Shared-v2-ts/Enums/Status'
import { FireError } from '../../Shared/middlewares/errorHandler/errorHandler'
import CouponsRepository from './CouponsRepository'

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
}

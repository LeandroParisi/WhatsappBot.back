import { Request } from 'express'
import Coupom from '../../../../../Data/Entities/Models/Coupom'
import UpdateOneParams from '../../../../Shared-v2-ts/APIs/DefaultRequests/UpdateOneParams'

export default interface UpdateCoupomRequest extends Request {
  params : UpdateOneParams
  body : Coupom
}

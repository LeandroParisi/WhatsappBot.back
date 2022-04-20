import { Request } from 'express'
import Coupom from '../../../../../../../../Data/Entities/Models/Coupom'
import UpdateOneParams from '../../../../../../../../Domain/Shared-v2-ts/Requests/UpdateOneParams'

export default interface UpdateCoupomRequest extends Request {
  params : UpdateOneParams
  body : Coupom
}
import { Request } from 'express'
import Coupom from '../../../../../Data/Entities/Models/Coupom'

export default interface CreateCoupomRequest extends Request {
  body : Coupom
}

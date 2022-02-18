import { Request } from 'express'
import ValidateCoupomParams from './Params'

export default interface ValidateCoupomRequest extends Request {
  params : ValidateCoupomParams
}

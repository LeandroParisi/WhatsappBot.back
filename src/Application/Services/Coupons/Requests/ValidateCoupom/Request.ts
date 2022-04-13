import { Request } from 'express'
import ValidateCoupomBody from './Body'
import ValidateCoupomParams from './Params'

export default interface ValidateCoupomRequest extends Request {
  params : ValidateCoupomParams
  body : ValidateCoupomBody
}

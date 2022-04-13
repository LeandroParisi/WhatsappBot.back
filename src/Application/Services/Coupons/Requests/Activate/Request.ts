import { Request } from 'express'
import ActivateParams from '../../../../Shared-v2-ts/APIs/DefaultRequests/ActivateParams'

export default interface ActivateCoupomRequest extends Request {
  params : ActivateParams
}

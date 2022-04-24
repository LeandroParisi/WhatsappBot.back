import { Request } from 'express'
import DeActivateParams from '../../../Shared-v2-ts/Requests/DeActivateParams'

export default interface DeActivateCoupomRequest extends Request {
  params : DeActivateParams
}

import { Request } from 'express'
import DeActivateParams from '../../../../../../../../Domain/Shared-v2-ts/Requests/DeActivateParams'

export default interface DeActivateCoupomRequest extends Request {
  params : DeActivateParams
}

import { Request } from 'express'
import DeleteOneParams from '../../../../../../../../Domain/Shared-v2-ts/Requests/DeleteOneParams'

export default interface DeleteCoupomRequest extends Request {
  params : DeleteOneParams
}

import { Request } from 'express'
import DeleteOneParams from '../../../Shared-v2-ts/Requests/DeleteOneParams'

export default interface DeleteCoupomRequest extends Request {
  params : DeleteOneParams
}

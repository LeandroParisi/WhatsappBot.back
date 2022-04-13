import { Request } from 'express'
import DeleteOneParams from '../../../../Shared-v2-ts/APIs/DefaultRequests/DeleteOneParams'

export default interface DeleteCoupomRequest extends Request {
  params : DeleteOneParams
}

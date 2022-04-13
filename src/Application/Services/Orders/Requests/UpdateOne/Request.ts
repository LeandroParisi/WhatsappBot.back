import Order from '../../../../../Data/Entities/Models/Order'
import IAuthenticatedRequest from '../../../../Shared-v2-ts/APIs/Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'
import UpdateOrderParams from './Params'

export default interface UpdateOrderReq extends IAuthenticatedRequest {
  body : Order
  params : UpdateOrderParams
}

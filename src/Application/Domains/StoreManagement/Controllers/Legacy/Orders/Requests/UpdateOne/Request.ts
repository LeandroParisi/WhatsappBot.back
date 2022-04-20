import Order from '../../../../../../../../Data/Entities/Models/Order'
import IAuthenticatedRequest from '../../../../../../../../Domain/Shared-v2-ts/Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'
import UpdateOrderParams from './Params'

export default interface UpdateOrderReq extends IAuthenticatedRequest {
  body : Order
  params : UpdateOrderParams
}

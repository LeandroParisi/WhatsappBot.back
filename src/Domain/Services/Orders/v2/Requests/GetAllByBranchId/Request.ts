import IAuthenticatedRequest from '../../../../../Shared-v2-ts/Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'
import GetOrdersParam from './Params'
import GetOrdersQuery from './Query'

export default interface GetAllOrdersReq extends IAuthenticatedRequest {
  query : GetOrdersQuery
  params : GetOrdersParam
}

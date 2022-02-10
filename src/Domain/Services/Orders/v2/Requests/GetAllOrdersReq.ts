import Order from '../../../../../Data/Entities/Models/Order'
import IAuthenticatedRequest from '../../../../Shared-v2-ts/Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'

export type QueryAllOrdersQuery = {
  'branchId': string,
  'status': string
}

export default interface GetAllOrdersReq extends IAuthenticatedRequest {
  query : QueryAllOrdersQuery
}

export class GetOrdersDTO extends Order {
  /**
   *
   */
  constructor(query : QueryAllOrdersQuery) {
    super()
    this.branchId = query.branchId
    this.status = Number(query.status)
  }
}

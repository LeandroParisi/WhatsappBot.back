import IAuthenticatedRequest from '../../../../Shared-v2-ts/APIs/Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'
import GetByBranchAndCustomerParams from './Params'
import GetByBranchAndCustomerQuery from './Query'

export default interface GetByBranchAndCustomerReq extends IAuthenticatedRequest {
  params : GetByBranchAndCustomerParams,
  query : GetByBranchAndCustomerQuery
}

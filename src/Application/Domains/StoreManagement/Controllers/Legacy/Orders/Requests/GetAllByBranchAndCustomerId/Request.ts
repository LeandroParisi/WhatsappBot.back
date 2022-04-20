import IAuthenticatedRequest from '../../../../../../../../Domain/Shared-v2-ts/Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'
import GetByBranchAndCustomerParams from './Params'
import GetByBranchAndCustomerQuery from './Query'

export default interface GetByBranchAndCustomerReq extends IAuthenticatedRequest {
  params : GetByBranchAndCustomerParams,
  query : GetByBranchAndCustomerQuery
}

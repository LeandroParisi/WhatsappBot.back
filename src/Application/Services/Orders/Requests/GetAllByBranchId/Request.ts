import IAuthenticatedRequest from '../../../../Shared-v2-ts/APIs/Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'
import GetByBranchParams from './Params'
import GetByBranchQuery from './Query'

export default interface GetByBranchReq extends IAuthenticatedRequest {
  query : GetByBranchQuery
  params : GetByBranchParams
}

import GetByBranchAndCustomerParams from '../Params'
import GetByBranchAndCustomerQuery from '../Query'

export default class GetAllByBranchAndCustomerFilter {
  branchId : string

  customerId : string

  status? : Array<number>

  /**
   *
   */
  constructor(query : GetByBranchAndCustomerQuery, params : GetByBranchAndCustomerParams) {
    this.branchId = params.branchId
    this.customerId = params.customerId
    this.status = query.status ? query.status.trim().split(',').map((s) => Number(s)) : null
  }
}

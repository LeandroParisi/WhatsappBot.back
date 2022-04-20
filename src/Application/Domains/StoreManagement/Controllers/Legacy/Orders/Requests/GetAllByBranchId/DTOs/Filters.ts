import GetAllByBranchParams from '../Params'
import GetByBranchQuery from '../Query'

export default class GetByBranchFilters {
  branchId : string

  status? : Array<number>

  /**
   *
   */
  constructor(query : GetByBranchQuery, params : GetAllByBranchParams) {
    this.branchId = params.branchId
    this.status = query.status ? query.status.trim().split(',').map((s) => Number(s)) : null
  }
}

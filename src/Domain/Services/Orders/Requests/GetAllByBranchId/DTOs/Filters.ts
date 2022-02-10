import GetOrdersParam from '../Params'
import GetOrdersQuery from '../Query'

export default class GetOrdersFilters {
  branchId : string

  status? : Array<number>

  /**
   *
   */
  constructor(query : GetOrdersQuery, params : GetOrdersParam) {
    this.branchId = params.branchId
    this.status = query.status ? query.status.trim().split(',').map((s) => Number(s)) : null
  }
}

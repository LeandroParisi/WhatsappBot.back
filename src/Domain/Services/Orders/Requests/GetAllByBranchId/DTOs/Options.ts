import GetOrdersQuery from '../Query'

export default class GetOrdersOptions {
  shouldGroup : boolean

  /**
   *
   */
  constructor(query : GetOrdersQuery) {
    this.shouldGroup = !!Number(query.groupedByStatus)
  }
}

import GetByBranchQuery from '../Query'

export default class GetByBranchOptions {
  shouldGroup : boolean

  /**
   *
   */
  constructor(query : GetByBranchQuery) {
    this.shouldGroup = !!Number(query.groupedByStatus)
  }
}

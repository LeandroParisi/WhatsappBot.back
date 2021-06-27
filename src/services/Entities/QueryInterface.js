/* eslint-disable class-methods-use-this */
class QueryInterface {
  constructor({
    create, findAll, deleteOne, updateOne,
  }) {
    this.create = create || this.noQuery;
    this.findAll = findAll || this.noQuery;
    this.deleteOne = deleteOne || this.noQuery;
    this.updateOne = updateOne || this.noQuery;
  }

  noQuery() {
    return {};
  }
}

module.exports = QueryInterface;

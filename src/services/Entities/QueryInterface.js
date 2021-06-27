/* eslint-disable class-methods-use-this */
class QueryInterface {
  constructor({
    create, findAll, deleteOne, updateOne, findOne, findByPk, activate, deActivate,
  }) {
    this.create = create || this.noQuery;
    this.findAll = findAll || this.noQuery;
    this.findByPk = findByPk || this.noQuery;
    this.findOne = findOne || this.defaultFindOne;
    this.updateOne = updateOne || this.defaultUpdateOne;
    this.deleteOne = deleteOne || this.defaultDelete;
    this.activate = activate || this.activate;
    this.deActivate = deActivate || this.deActivate;
  }

  noQuery() {
    return {};
  }

  defaultFindOne(query) {
    return { where: query };
  }

  defaultUpdateOne(payload) {
    return { ...payload };
  }

  defaultDelete(id) {
    return { where: id };
  }

  activate() {
    return { isActive: true };
  }

  deActivate() {
    return { isActive: false };
  }
}

module.exports = QueryInterface;

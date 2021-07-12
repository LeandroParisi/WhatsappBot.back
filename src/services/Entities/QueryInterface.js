/* eslint-disable class-methods-use-this */
class QueryInterface {
  constructor({
    create,
    findAll,
    deleteOne,
    updateOne,
    findOne,
    findByPk,
    activate,
    deActivate,
  }) {
    this.create = create || this.noQuery;
    this.findAll = findAll || this.findAll;
    this.findByPk = findByPk || this.findByPk;
    this.findOne = findOne || this.findOne;
    this.updateOne = updateOne || this.updateOne;
    this.deleteOne = deleteOne || this.delete;
    this.activate = activate || this.activate;
    this.deActivate = deActivate || this.deActivate;
  }

  noQuery() {
    return {};
  }

  findByPk(id) {
    return id;
  }

  findAll() {
    return {};
  }

  findOne(query) {
    return { where: query, attributes: { exclude: ['createdAt', 'updatedAt'] } };
  }

  updateOne(payload) {
    return { ...payload };
  }

  delete(id) {
    return { where: { id } };
  }

  activate() {
    return { isActive: true };
  }

  deActivate() {
    return { isActive: false };
  }
}

module.exports = QueryInterface;

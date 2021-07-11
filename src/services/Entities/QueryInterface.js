const queryAttributesFactory = require('./Factories/queryAttributesFactory');

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
    this.findByPk = findByPk || this.noQuery;
    this.findOne = findOne || this.findOne;
    this.updateOne = updateOne || this.updateOne;
    this.deleteOne = deleteOne || this.delete;
    this.activate = activate || this.activate;
    this.deActivate = deActivate || this.deActivate;
  }

  noQuery() {
    return {};
  }

  findAll({ id, query }) {
    const attributes = queryAttributesFactory(query);
    if (id) {
      return { where: { user_id: id }, attributes };
    }
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

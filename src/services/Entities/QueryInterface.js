/* eslint-disable class-methods-use-this */
class QueryInterface {
  findByPk(id) {
    return id;
  }

  findAll({ query }) {
    return { where: query };
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

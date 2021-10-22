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

  updateOne(body) {
    return { ...body };
  }

  deleteOne(id) {
    return { where: { id } };
  }

  activate() {
    return { isActive: true };
  }

  deActivate() {
    return { isActive: false };
  }

  create(body) {
    return { ...body };
  }
}

module.exports = QueryInterface;

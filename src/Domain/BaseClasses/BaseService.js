const { errorMessages, status } = require('../../libs');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');

class BaseService {
  constructor(model, queries) {
    this.model = model;
    this.queries = queries;
  }

  // Endpoint Methods
  async create({ body, user }) {
    console.log({ servicesBody: body });
    const insertedEntity = await this.model.create({ ...body, ...user });
    return insertedEntity;
  }

  async findAll({ query, user }, options) {
    const data = await this.model.findAll(this.queries.findAll({ query, user }, options));
    return data;
  }

  async findByPk(id) {
    const data = await this.model.findByPk(this.queries.findByPk(id));
    return data;
  }

  async findOne(query) {
    const data = await this.model.findOne(this.queries.findOne(query));
    return data;
  }

  async updateOne(id, payload) {
    const wasUpdated = await this.model.update(
      this.queries.updateOne(payload), { where: { id } },
    );

    const updatedEntity = await this.model.findOne(this.queries.findOne({ id }));

    if (!wasUpdated[0]) throw new FireError(status.notFound, errorMessages.notFound);
    return updatedEntity;
  }

  async deleteOne(id) {
    const deletedEntity = await this.model.destroy(this.queries.deleteOne(id));
    return deletedEntity;
  }

  async activate(id) {
    const updatedEntity = await this.model.update(this.queries.activate(), { where: { id } });
    return updatedEntity;
  }

  async deActivate(id) {
    const updatedEntity = await this.model.update(this.queries.deActivate(), { where: { id } });
    return updatedEntity;
  }
}

module.exports = BaseService;

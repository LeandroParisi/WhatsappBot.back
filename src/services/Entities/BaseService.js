class BaseService {
  constructor(model, queries) {
    this.model = model;
    this.queries = queries;
  }

  // Endpoint Methods
  async create(payload) {
    const insertedEntity = await this.model.create(payload);
    return insertedEntity;
  }

  async findAll() {
    const data = await this.model.findAll(this.queries.findAll());
    return data;
  }

  async findByPk(id) {
    const data = await this.model.findByPk(id);
    return data;
  }

  async findOne(query) {
    const data = await this.model.findOne(this.queries.findOne(query));
    return data;
  }

  async updateOne(id, payload) {
    const updatedEntity = await this.model.update(
      this.queries.updateOne(payload), { where: { id } },
    );
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

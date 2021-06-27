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

  async deleteOne(id) {
    const deletedEntity = await this.model.destroy(this.queries.deleteOne(id));
    return deletedEntity;
  }

  async updateOne(payload) {
    const data = req.body;
    console.log(this.basePath);
    console.log('base update');
  }
}

module.exports = BaseService;

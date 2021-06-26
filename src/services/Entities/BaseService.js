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
    const data = await this.model.findAll(this.queries.findAll);
    return data;
  }

  async deleteOne(payload) {
    const id = req.params;
    console.log(this.basePath);
    console.log('base delete');
  }

  async updateOne(payload) {
    const data = req.body;
    console.log(this.basePath);
    console.log('base update');
  }
}

module.exports = BaseService;

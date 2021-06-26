class BaseService {
  constructor(model, options) {
    this.model = model;
    this.options = options;
  }

  // Endpoint Methods
  async create(payload) {
    const insertedEntity = await this.model.create(payload);
    return insertedEntity;
  }

  async findAll() {
    const data = await this.model.findAll(this.options.findAll);
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

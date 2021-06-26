class BaseService {
  constructor(model) {
    this.model = model;
  }

  // Endpoint Methods
  async create(payload) {
    const insertedEntity = await this.model.create(payload);
    return insertedEntity;
  }

  async findAll() {
    console.log(this.basePath);
    console.log('base find All');
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

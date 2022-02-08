const {
  CustomerAddresses,
} = require('../../../models');
const BaseService = require('../BaseClasses/BaseService');
const AddressesQueries = require('./CustomerAddressesQueries');

class AddressesService extends BaseService {
  // async create({ body }) {
  //   const insertedEntity = await this.model.create({ ...body });
  //   return insertedEntity;
  // }
}

const AddressesServices = new AddressesService(CustomerAddresses, AddressesQueries);

module.exports = AddressesServices;

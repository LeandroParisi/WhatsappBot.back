const {
  CustomerAddresses,
} = require('../../models');
const BaseService = require('../Entities/BaseService');
const AddressesQueries = require('../../queries/CustomerAddresses/CustomerAddressesQueries');

class AddressesService extends BaseService {
  // async create({ body }) {
  //   const insertedEntity = await this.model.create({ ...body });
  //   return insertedEntity;
  // }
}

const AddressesServices = new AddressesService(CustomerAddresses, AddressesQueries);

module.exports = AddressesServices;

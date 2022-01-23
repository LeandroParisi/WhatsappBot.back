const {
  CustomerAddresses,
} = require('../../models');
const BaseService = require('../Entities/BaseService');
const AddressesQueries = require('../../queries/CustomerAddresses/CustomerAddressesQueries');

class AddressesService extends BaseService {

}

const AddressesServices = new AddressesService(CustomerAddresses, AddressesQueries);

module.exports = AddressesServices;

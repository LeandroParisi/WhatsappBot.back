const AddressesServices = require('../../services/CustomerAddresses/CustomerAddressesService');

const BaseController = require('../Entities/BaseController');

class AddressController extends BaseController {

}

const AddressessController = new AddressController(AddressesServices);

AddressessController.removeEndpoints(
  [
    'deleteOne',
    'activate',
    'deActivate',
    'findOne',
    'findByPk',
    'deleteOne',
  ],
);

module.exports = AddressessController;

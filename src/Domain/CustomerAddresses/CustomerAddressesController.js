const BaseController = require('../BaseClasses/BaseController');
const AddressesServices = require('./CustomerAddressesService');

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
  ],
);

module.exports = AddressessController;

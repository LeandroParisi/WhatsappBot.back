const BaseRouter = require('../Entities/BaseRouter');
const AddressesController = require('./CustomerAddressesController');

const AddressesRouter = new BaseRouter('/addresses', AddressesController.getRoutes());

module.exports = AddressesRouter;

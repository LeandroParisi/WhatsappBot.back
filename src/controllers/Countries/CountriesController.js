const CountriesService = require('../../services/Countries/CountriesServices');

const BaseController = require('../Entities/BaseController');

class Controller extends BaseController {

}

const CountriesController = new Controller(CountriesService);

CountriesController.removeEndpoints(['deleteOne']);
// CountriesController.addMiddlewares('all', [authenticateUser]);

module.exports = CountriesController;

const BaseRouter = require('../Entities/BaseRouter');
	const CountriesController = require('./CountriesController');

	const CountriesRouter = new BaseRouter('/countries', CountriesController.getRoutes());

	module.exports = CountriesRouter;

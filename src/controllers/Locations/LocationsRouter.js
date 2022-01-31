const BaseRouter = require('../Entities/BaseRouter');
const LocationsController = require('./LocationsController');

const LocationsRouter = new BaseRouter('/locations', LocationsController.getRoutes());

module.exports = LocationsRouter;

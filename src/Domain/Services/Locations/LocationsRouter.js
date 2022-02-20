const BaseRouter = require('../BaseClasses/BaseRouter')
const LocationsController = require('./LocationsController')

const LocationsRouter = new BaseRouter('/locations', LocationsController.getRoutes())

module.exports = LocationsRouter

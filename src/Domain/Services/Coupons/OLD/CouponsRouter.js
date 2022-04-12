const BaseRouter = require('../BaseClasses/BaseRouter')
const CouponsController = require('./CouponsController')

const CouponsRouter = new BaseRouter('/coupons', CouponsController.getRoutes())

module.exports = CouponsRouter

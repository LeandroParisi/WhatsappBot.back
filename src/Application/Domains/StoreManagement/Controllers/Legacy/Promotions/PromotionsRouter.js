const BaseRouter = require('../BaseClasses/BaseRouter')
const PromotionsController = require('./PromotionsController')

const PromotionsRouter = new BaseRouter('/promotions', PromotionsController.getRoutes())

module.exports = PromotionsRouter

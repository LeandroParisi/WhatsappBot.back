const BaseRouter = require('../Entities/BaseRouter');
const PromotionsController = require('./PromotionsController');

const PromotionsRouter = new BaseRouter('/promotions', PromotionsController.getRoutes());

module.exports = PromotionsRouter;

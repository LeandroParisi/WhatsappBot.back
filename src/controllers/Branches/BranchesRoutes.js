const validateToken = require('../../middlewares/validations/validateToken');
const BaseRoutes = require('../Entities/BaseRoutes');
// const { METHODS, status } = require('../../libs');
// const { resMessages } = require('../../libs');

const BranchesRoutes = new BaseRoutes();
BranchesRoutes.removeEndpoints(['deleteOne']);
BranchesRoutes.addMiddlewares('create', [validateToken]);

module.exports = BranchesRoutes;

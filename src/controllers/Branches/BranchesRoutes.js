const authenticateUser = require('../../middlewares/validations/authenticateUser');
const BaseRoutes = require('../Entities/BaseRoutes');
// const { METHODS, status } = require('../../libs');
// const { resMessages } = require('../../libs');

const BranchesRoutes = new BaseRoutes();
BranchesRoutes.removeEndpoints(['deleteOne']);
BranchesRoutes.addMiddlewares('all', [authenticateUser]);

module.exports = BranchesRoutes;

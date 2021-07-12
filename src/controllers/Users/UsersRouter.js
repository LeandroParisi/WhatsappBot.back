const BaseRouter = require('../Entities/BaseRouter');
const UsersController = require('./UsersController');

const UsersRouter = new BaseRouter('/users', UsersController.getRoutes());

module.exports = UsersRouter;

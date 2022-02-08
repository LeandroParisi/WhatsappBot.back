const BaseRouter = require('../BaseClasses/BaseRouter');
const UsersController = require('./UsersController');

const UsersRouter = new BaseRouter('/users', UsersController.getRoutes());

module.exports = UsersRouter;

const BaseController = require('../Entities/BaseController');
const UsersRoutes = require('./UsersRoutes');

const UsersController = new BaseController('/users', UsersRoutes.getRoutes());

module.exports = UsersController;

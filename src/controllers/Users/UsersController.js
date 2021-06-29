const UsersService = require('../../services/Users/UsersService');
const BaseController = require('../Entities/BaseController');
const UsersRoutes = require('./UsersRoutes');

const UsersController = new BaseController('/users', UsersService, UsersRoutes.getRoutes());

module.exports = UsersController;

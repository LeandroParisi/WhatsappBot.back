const UsersService = require('../../services/Users/UsersService');
const BaseController = require('../Entities/BaseController');

const UsersController = new BaseController('/users', UsersService);

module.exports = UsersController;

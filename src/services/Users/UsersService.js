const { Users } = require('../../models');
const BaseService = require('../Entities/BaseService');

const UsersService = new BaseService(Users);

module.exports = UsersService;

const { Users } = require('../../models');
const BaseService = require('../Entities/BaseService');
const UserQueries = require('./UsersQueries');

const UsersService = new BaseService(Users, UserQueries);

module.exports = UsersService;

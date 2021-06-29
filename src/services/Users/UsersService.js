const { generateToken } = require('../../authentication/jwtConfig');
const { verifyPassword } = require('../../authentication/passwordHashing');
const { status, errorMessages } = require('../../libs');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');
const { Users } = require('../../models');
const BaseService = require('../Entities/BaseService');
const UserQueries = require('./UsersQueries');

class UsersService extends BaseService {
  async login(payload) {
    const { email, password } = payload;
    const loggedUser = await this.model.findOne(this.queries.findOne({ email }));

    if (!loggedUser) throw new FireError(status.notFound, errorMessages.invalidUser);

    const { password: passwordHash } = loggedUser.dataValues;
    const isPasswordCorrect = await verifyPassword(password, passwordHash);

    if (!isPasswordCorrect) throw new FireError(status.notFound, errorMessages.invalidUser);

    const token = generateToken(email);

    return token;
  }
}

module.exports = new UsersService(Users, UserQueries);

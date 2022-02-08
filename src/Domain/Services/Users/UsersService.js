const { generateToken, baseConfig, longerConfig } = require('../../Shared/authentication/jwtConfig');
const { verifyPassword } = require('../../Shared/authentication/passwordHashing');
const { status, errorMessages } = require('../../Shared/libs');
const { FireError } = require('../../Shared/middlewares/errorHandler/errorHandler');
const { Users } = require('../../../models');
const BaseService = require('../BaseClasses/BaseService');
const UsersQueries = require('./UsersQueries');

class UsersService extends BaseService {
  async login(payload) {
    const { email, password } = payload;

    const { id, role } = await this.validateUser(email, password);

    const token = generateToken({ email, id, role }, baseConfig);
    return token;
  }

  async botLogin(payload) {
    const { email, password } = payload;

    const { id, role } = await this.validateUser(email, password);

    const token = generateToken({ email, id, role }, longerConfig);
    return { token };
  }

  async botAuth(payload) {
    const { email, token } = payload;

    const loggedUser = await this.model.findOne(this.queries.findOne({ email }));

    if (!loggedUser) throw new FireError(status.notFound, errorMessages.invalidUser);

    if (loggedUser.password === token) return;

    throw new FireError(status.forbidden, errorMessages.invalidUser);
  }

  async findAll() {
    const users = await super.findAll({});
    return users.map((user) => {
      const json = user.toJSON();
      return {
        ...json,
        userBranches: json.userBranches.map((userBranch) => ({
          ...userBranch,
          deliveryTypes: userBranch.deliveryTypes.map((dt) => dt.deliveryType),
          paymentMethods: userBranch.paymentMethods.map((pm) => pm.paymentMethod),
        })),
      };
    });
  }

  async validateUser(email, password) {
    const loggedUser = await this.model.findOne(this.queries.findOne({ email }));

    if (!loggedUser) throw new FireError(status.notFound, errorMessages.invalidUser);

    const { password: passwordHash, id, role } = loggedUser.dataValues;
    const isPasswordCorrect = await verifyPassword(password, passwordHash);

    if (!isPasswordCorrect) throw new FireError(status.notFound, errorMessages.invalidUser);

    return { passwordHash, id, role };
  }
}

module.exports = new UsersService(Users, UsersQueries);

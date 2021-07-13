const { generateToken } = require('../../authentication/jwtConfig');
const { verifyPassword } = require('../../authentication/passwordHashing');
const { status, errorMessages } = require('../../libs');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');
const { Users } = require('../../models');
const BaseService = require('../Entities/BaseService');
const UsersQueries = require('./UsersQueries');

class UsersService extends BaseService {
  async login(payload) {
    const { email, password } = payload;
    const loggedUser = await this.model.findOne(this.queries.findOne({ email }));

    if (!loggedUser) throw new FireError(status.notFound, errorMessages.invalidUser);

    const { password: passwordHash, id, role } = loggedUser.dataValues;
    const isPasswordCorrect = await verifyPassword(password, passwordHash);

    if (!isPasswordCorrect) throw new FireError(status.notFound, errorMessages.invalidUser);

    const token = generateToken({ email, id, role });

    return token;
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
}

module.exports = new UsersService(Users, UsersQueries);

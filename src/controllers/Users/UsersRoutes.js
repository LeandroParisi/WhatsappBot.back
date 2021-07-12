/* eslint-disable class-methods-use-this */
const BaseRoutes = require('../Entities/BaseRoutes');
const {
  METHODS, status, resMessages, errorMessages,
} = require('../../libs');
const UsersService = require('../../services/Users/UsersService');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');
const { decode } = require('../../authentication/jwtConfig');

class UserRoutes extends BaseRoutes {
  constructor(service) {
    super(service);

    this.newRoutes = {
      login: {
        endpoint: '/login',
        method: METHODS.POST,
        handler: this.login.bind(this),
        localMiddleware: [],
      },

      auth: {
        endpoint: '/auth',
        method: METHODS.GET,
        handler: this.auth.bind(this),
        localMiddleware: [],
      },
    };
  }

  async login(req, res) {
    const payload = req.body;
    const token = await this.service.login(payload);
    res.cookie('wbt', token, { maxAge: 86400000, httpOnly: true });
    res.status(status.ok).json({ message: resMessages.loginOK });
  }

  async auth(req, res) {
    const { wbt } = req.cookies;
    if (!wbt) throw new FireError(status.unauthorized, errorMessages.expiredSession);
    try {
      decode(wbt);
    } catch (error) {
      throw new FireError(status.unauthorized, errorMessages.expiredSession);
    }
    res.status(status.ok).json({ message: resMessages.validSession });
  }
}

const UsersRoutes = new UserRoutes(UsersService);

UsersRoutes.addRoutes(UsersRoutes.newRoutes);
UsersRoutes.removeEndpoints(['deleteOne']);

module.exports = UsersRoutes;

const BaseRoutes = require('../Entities/BaseRoutes');
const {
  METHODS, status, resMessages, errorMessages,
} = require('../../libs');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');
const { decode } = require('../../authentication/jwtConfig');

const userRoutes = {
  login: {
    endpoint: '/login',
    method: METHODS.POST,
    handler: (service) => async (req, res) => {
      const payload = req.body;
      const token = await service.login(payload);
      res.cookie('wbt', token, { maxAge: 86400000, httpOnly: true });
      res.status(status.ok).json({ message: resMessages.loginOK });
    },
    localMiddleware: [],
  },

  auth: {
    endpoint: '/auth',
    method: METHODS.GET,
    handler: () => async (req, res) => {
      const { wbt } = req.cookies;
      if (!wbt) throw new FireError(status.unauthorized, errorMessages.expiredSession);
      try {
        decode(wbt);
      } catch (error) {
        throw new FireError(status.unauthorized, errorMessages.expiredSession);
      }
      res.status(status.ok).json({ message: resMessages.validSession });
    },
    localMiddleware: [],
  },
};

const UsersRoutes = new BaseRoutes(userRoutes);
UsersRoutes.removeEndpoints(['deleteOne']);

module.exports = UsersRoutes;

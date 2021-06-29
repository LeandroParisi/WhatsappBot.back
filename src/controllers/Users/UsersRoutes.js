const BaseRoutes = require('../Entities/BaseRoutes');
const { METHODS, status } = require('../../libs');
const { resMessages } = require('../../libs');

const userRoutes = {
  login: {
    endpoint: '/login',
    method: METHODS.POST,
    handler: (service) => async (req, res) => {
      const payload = req.body;
      const token = await service.login(payload);
      res.status(status.ok).json({ message: resMessages.loginOK, token });
    },
    localMiddleware: [],
  },
};

const UsersRoutes = new BaseRoutes(userRoutes);
UsersRoutes.removeEndpoints(['deleteOne']);

module.exports = UsersRoutes;

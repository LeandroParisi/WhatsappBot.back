// const authenticateUser = require('../../middlewares/validations/authenticateUser');
// const BaseRoutes = require('../Entities/BaseRoutes');
// const { METHODS, status } = require('../../libs');
// const { resMessages } = require('../../libs');

// const branchRoutes = {
//   findAll: {
//     endpoint: '/',
//     method: METHODS.GET,
//     handler: (service) => async (req, res) => {
//       const { user, query } = req;
//       const data = await service.findAll({ user, query });
//       res.status(status.ok).json({ data });
//     },
//     localMiddleware: [],
//   },
// };

// const BranchesRoutes = new BaseRoutes();

// BranchesRoutes.removeEndpoints(['deleteOne']);
// BranchesRoutes.addMiddlewares('all', [authenticateUser]);

// module.exports = BranchesRoutes;

const status = require('../../libs/statusDictionary');
const usersServices = require('../../services/Users/UsersServices');
const BaseController = require('../1_Entities/BaseController');

const UserController = new BaseController('/users', usersServices);

// const create = async (req, res) => {
//   const user = req.body;
//   const createdUser = await usersServices.create(user);
//   res.status(status.created).json({ createdUser });
// };

// const findAll = async (req, res) => {
//   const users = await usersServices.findAll();
//   res.status(status.ok).json({ users });
// };

module.exports = UserController;

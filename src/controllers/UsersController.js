// const { errorCatcher } = require('../middlewares/errorHandler/errorHandler');
const usersServices = require('../services/UsersServices');

const findAll = async (req, res) => {
  const users = usersServices.findAll();
  res.status(200).json({ users });
};

const createUser = async (req, res) => {
  const user = req.body;
  const createdUser = await usersServices.createUser(user);
  res.status(200).json({ ok: 'ok' });
};

module.exports = { findAll, createUser };

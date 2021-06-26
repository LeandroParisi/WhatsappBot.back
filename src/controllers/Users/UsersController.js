const usersServices = require('../../services/Users/UsersServices');

const createUser = async (req, res) => {
  const user = req.body;
  const createdUser = await usersServices.createUser(user);
  res.status(200).json({ ok: 'ok' });
};

const findAll = async (req, res) => {
  const users = await usersServices.findAll();
  res.status(200).json({ users });
};

module.exports = { findAll, createUser };

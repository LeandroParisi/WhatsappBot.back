const { Users, Branches } = require('../../models');
const { generateUser } = require('./utils');

const create = async (user) => {
  const createdUser = await Users.create(user);

  return createdUser;
};

const findAll = async () => {
  const users = await Users.findAll({
    include: { model: Branches, as: 'userBranches' },
  });

  return users;
};

module.exports = {
  findAll,
  create,
};

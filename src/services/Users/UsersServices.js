const { Users, Branches } = require('../../models');
const { generateUser } = require('./utils');

const createUser = async (user) => {
  const userToInsert = await generateUser(user);

  const createdUser = await Users.create({ ...userToInsert });

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
  createUser,
};

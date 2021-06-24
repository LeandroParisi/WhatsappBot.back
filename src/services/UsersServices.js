const { Users, Branches } = require('../models');

const createUser = async (user) => {
  const createdUser = await Users.create({ ...user });
  console.log(createdUser);
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

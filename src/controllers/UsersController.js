const { Users, Branches } = require('../models');

const findAll = async (req, res) => {
  const users = await Users.findAll({
    include: { model: Branches, as: 'userBranches' },

  });

  res.status(200).json({ users });
};

module.exports = { findAll };

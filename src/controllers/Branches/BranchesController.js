const status = require('../../libs/statusDictionary');
const branchesServices = require('../../services/Branches/BranchesServices');

const create = async (req, res) => {
  const user = req.body;
  const createdUser = await branchesServices.create(user);
  res.status(status.created).json({ createdUser });
};

const findAll = async (req, res) => {
  const users = await branchesServices.findAll();
  res.status(status.ok).json({ users });
};

module.exports = { findAll, create };

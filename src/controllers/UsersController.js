const { Users } = require('../models');

const findAll = async (req, res) => {

  const users = await Users.findAll();

  res.status(200).json({users });
};



module.exports = {
  findAll};

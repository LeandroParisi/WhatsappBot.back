const { hashPassword } = require('../../authentication/passwordHashing');

const generateUser = async (user) => {
  const treatedUser = { ...user };
  const { password } = user;
  const hashedPassword = await hashPassword(password);
  delete treatedUser.password;

  return { ...treatedUser, passwordHash: hashedPassword };
};

module.exports = {
  generateUser,
};

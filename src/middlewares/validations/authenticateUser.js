const { decode } = require('../../authentication/jwtConfig');
const { status, errorMessages } = require('../../libs');
const { FireError } = require('../errorHandler/errorHandler');
require('dotenv/config');

const authenticateUser = async (req, _res, next) => {
  console.log('AUTHENTICATE');
  const { wbt } = req.cookies;
  if (!wbt) throw new FireError(status.unauthorized, errorMessages.expiredSession);
  try {
    const { userData } = decode(wbt);
    req.user = { ...userData };
    next();
  } catch (error) {
    throw new FireError(status.unauthorized, errorMessages.expiredSession);
  }
};

module.exports = authenticateUser;

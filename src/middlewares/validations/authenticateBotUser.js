const { decode } = require('../../authentication/jwtConfig');
const { status, errorMessages } = require('../../libs');
const { FireError } = require('../errorHandler/errorHandler');
require('dotenv/config');

const authenticateBotUser = async (req, _res, next) => {
  console.log('authenticateBotUser');
  const { auth } = req.headers;
  if (!auth) throw new FireError(status.unauthorized, errorMessages.expiredSession);
  try {
    const { userData } = decode(auth);
    req.user = { ...userData };
    next();
  } catch (error) {
    throw new FireError(status.unauthorized, errorMessages.expiredSession);
  }
};

module.exports = authenticateBotUser;

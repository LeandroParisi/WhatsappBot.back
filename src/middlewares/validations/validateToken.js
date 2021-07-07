const { decode } = require('../../authentication/jwtConfig');
const { status, errorMessages } = require('../../libs');
const { FireError } = require('../errorHandler/errorHandler');
require('dotenv/config');

const validateToken = async (req, res, next) => {
  const { authentication } = req.headers;
  try {
    const isTokenValid = decode(authentication);
    if (!isTokenValid) throw new FireError(status.unauthorized, errorMessages.unauthorized);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateToken;

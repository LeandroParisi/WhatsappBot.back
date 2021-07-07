require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const jwtSign = (payload, jwtSecret, jwtConfig) => (
  jwt.sign(payload, jwtSecret, jwtConfig)
);

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createJWTPayload = (user) => ({
  iss: 'WhatsappApp',
  aud: 'identity',
  userData: user,
});

const generateToken = (user) => {
  const payload = createJWTPayload(user);
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

const decode = (token) => jwt.verify(token, secret);

module.exports = {
  secret,
  jwtConfig,
  createJWTPayload,
  jwtSign,
  generateToken,
  decode,
};

require('dotenv/config')
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

const jwtSign = (payload, jwtSecret, jwtConfig) => (
  jwt.sign(payload, jwtSecret, jwtConfig)
)

const baseConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
}

const longerConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
}

const createJWTPayload = (user) => ({
  iss: 'WhatsappApp',
  aud: 'identity',
  userData: user,
})

const generateToken = (user, jwtConfig) => {
  const payload = createJWTPayload(user)
  const token = jwt.sign(payload, secret, jwtConfig)
  return token
}

const decode = (token) => jwt.verify(token, secret)

module.exports = {
  secret,
  baseConfig,
  longerConfig,
  createJWTPayload,
  jwtSign,
  generateToken,
  decode,
}

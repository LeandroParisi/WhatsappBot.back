const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
}

const verifyPassword = async (password, hashedPassword) => {
  const isPasswordCorrect = await bcrypt.compare(password, hashedPassword)
  return isPasswordCorrect
}

module.exports = {
  hashPassword,
  verifyPassword,
}

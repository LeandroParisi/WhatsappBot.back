require('dotenv/config')
const fs = require('fs')

module.exports = {
  local: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'whatsapp_bot_development',
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        ca: fs.readFileSync(`${__dirname}/sa-east-1-bundle.pem`),
      },
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        ca: fs.readFileSync(`${__dirname}/sa-east-1-bundle.pem`),
      },
    },
  },
}

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
    database: `${process.env.DATABASE_NAME}?sslmode=no-verify`,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DATABASE_NAME}?sslmode=no-verify`,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
}

require('dotenv/config')

module.exports = {
  local: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'whatsapp_bot_development',
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },

  development: {
    username: process.env.DATABASE_URL.split('//')[1].split(':')[0],
    password: process.env.DATABASE_URL.split(':')[2].split('@')[0],
    database: process.env.DATABASE_URL.split('@')[1].split('/')[1],
    host: process.env.DATABASE_URL.split('@')[1].split('/')[0].split(':')[0],
    dialect: 'postgres',
    protocol: 'postgres',
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    protocol: 'postgres',
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
  },
}

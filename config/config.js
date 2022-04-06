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
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DATABASE_NAME}&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory`,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    protocol: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DATABASE_NAME}&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory`,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    protocol: 'postgres',
  },
}

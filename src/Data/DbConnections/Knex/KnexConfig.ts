import { Knex } from 'knex'

import 'dotenv/config'

const KnexConfig : Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    // port: process.env.PORT, // pg default port is 3306?
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: 'utc',
  },
  pool: {
    min: 2,
    max: 10,
  },
  // migrations: {
  //   tableName: 'knex_migrations',
  //   directory: 'migrations',
  // },
}

export default KnexConfig

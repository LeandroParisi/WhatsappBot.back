/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable radix */
import { Knex } from 'knex'

import 'dotenv/config'

const knexStringCase = require('knex-stringcase')

const pg = require('pg')

pg.types.setTypeParser(pg.types.builtins.INT8, (value: string) => parseInt(value))

pg.types.setTypeParser(pg.types.builtins.FLOAT8, (value: string) => parseFloat(value))

pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value: string) => parseFloat(value))

const connection = process.env.DATABASE_URL
  ? {
    connectionString: process.env.DATABASE_URL,
    ssl: false,
  }
  : {
    host: process.env.HOSTNAME,
    // port: process.env.PORT, // pg default port is 3306?
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: 'utc',
  }

const defaultConfig : Knex.Config = {
  client: 'pg',
  connection,
  pool: {
    min: 2,
    max: 10,
  },
  debug: true,
  // migrations: {
  //   tableName: 'knex_migrations',
  //   directory: 'migrations',
  // },
}

const KnexConfig = knexStringCase(defaultConfig)

export default KnexConfig

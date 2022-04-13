/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */

import { Pool } from 'pg'

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
require('dotenv').config()
const config = require('config').get('pg-connection')

class PgConnectionFactory {
  public static Create() : Pool {
    return new Pool(config)
  }
}

export default PgConnectionFactory

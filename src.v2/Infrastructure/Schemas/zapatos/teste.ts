import { Pool } from 'pg'
import { sql } from 'zapatos/db'
import type * as s from 'zapatos/schema'


const pool = new Pool()

const teste = await sql<s.users.SQL, s.users.Selectable[]>`
  SELECT * FROM users
`.run(pool)

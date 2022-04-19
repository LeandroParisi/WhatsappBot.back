/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../../../Infrastructure/StaticFiles/Schemas/zapatos/schema.d.ts" />
import IUserToken from '../../Domains/Authentication/Interfaces/IUserToken'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import PgConnectionFactory from '../../../Infrastructure/DbConnections/PgConnectionFactory'

class BranchesServices2 {
  async findAll(user : IUserToken, query : any) {
    const pool = PgConnectionFactory.Create()

    type Teste = s.branches.SQL | s.opening_hours.SQL | s.cities.SQL
    type TesteSelectable = s.branches.Selectable & { opening_hours: s.opening_hours.Selectable[] } & { city_name: string };

    const teste = await db.sql < Teste, TesteSelectable[]>`
      SELECT 
        ${'branches'}.*,
        to_jsonb(${'opening_hours'}) as ${'opening_hours'},
        cities.city_name as city_name
          FROM ${'branches'}
          JOIN ${'opening_hours'} ON ${'opening_hours'}.${'branch_id'} = ${'branches'}.${'id'}
          JOIN ${'cities'} ON ${'cities'}.${'id'} = ${'branches'}.${'city_id'}
    `.run(pool)

    return teste
  }
}

export default new BranchesServices2()

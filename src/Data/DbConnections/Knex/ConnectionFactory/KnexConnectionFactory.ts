import knex, { Knex } from 'knex'
import StaticImplements from '../../../../Shared/Anotations/StaticImplements'
import IDbConnectionFactory from '../../Interfaces/IDbConnectionFactory'
import KnexConfig from '../KnexConfig'

@StaticImplements<IDbConnectionFactory<Knex>>()
export default class KnexConnectionFactory {
  public static Create() {
    return knex(KnexConfig)
  }
}

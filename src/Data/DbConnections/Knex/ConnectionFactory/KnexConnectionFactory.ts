import knex, { Knex } from 'knex'
import { Service } from 'typedi'
import StaticImplements from '../../../../Commons/Anotations/StaticImplements'
import IDbConnectionFactory from '../../Interfaces/IDbConnectionFactory'
import KnexConfig from '../KnexConfig'

@Service()
@StaticImplements<IDbConnectionFactory<Knex>>()
export default class KnexConnectionFactory {
  public static Create() {
    return knex(KnexConfig)
  }
}

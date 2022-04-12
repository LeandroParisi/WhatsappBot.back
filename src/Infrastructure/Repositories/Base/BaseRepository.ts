/* eslint-disable class-methods-use-this */
import { Pool } from 'pg'
import * as db from 'zapatos/db'
import {
  Insertable, Table, Updatable, Whereable,
} from 'zapatos/schema'

export default class BaseRepository<Where extends Whereable, Updates extends Updatable, Insert extends Insertable> {
  private TableName : Table

  /**
   *
   */
  constructor(tableName : Table) {
    this.TableName = tableName
  }

  public async FindOne(where : Where, pool : Pool) {
    const entity = await db
      .selectExactlyOne(this.TableName, where).run(pool)

    return entity
  }

  public async Update(update : Updates, where : Where, pool : Pool) {
    const entity = await db
      .update(this.TableName, update, where).run(pool)

    return entity
  }

  public async Delete(where : Where, pool : Pool) {
    const deleted = await db
      .deletes(this.TableName, where, { returning: ['id'] }).run(pool)

    return deleted
  }

  public async Create(entity : Insert, pool : Pool) {
    const inserted = await db
      .insert(this.TableName, entity).run(pool)

    return inserted
  }
}

import KnexConnectionFactory from '../../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'
import { TablesValues } from '../../../../Data/Entities/Enums/Tables'

export type WhereParameters = any
export type SelectParameters = Array<string>

export interface FindOptions {
  where : WhereParameters
  select : SelectParameters
}

export default abstract class BaseRepository<Entity> {
  Table : TablesValues

  /**
   *
   */
  constructor(table : TablesValues) {
    this.Table = table
  }

  async UpdateOne(id: string, entity: Entity) : Promise<boolean> {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection(this.Table)
      .update(entity)
      .where('id', id)

    const result = await updateQuery

    console.log({ result })

    return result === 1
  }

  async Insert(entity : Entity) : Promise<boolean> {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection(this.Table)
      .insert(entity)

    const result = await updateQuery as unknown as { rowCount: number }

    return result.rowCount === 1
  }

  async FindOne(options : FindOptions) : Promise<Entity> {
    const dbConnection = KnexConnectionFactory.Create()

    const findQuery = dbConnection(this.Table)
      .select(...options.select).where({ ...options.where }).first()

    const foundEntity = await findQuery as Entity

    return foundEntity
  }

  async Activate<T>(id : T) : Promise<boolean> {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection(this.Table)
      .update({ isActive: true })
      .where('id', id)

    const result = await updateQuery

    console.log({ result })

    return result === 1
  }

  async DeActivate<T>(id : T) : Promise<boolean> {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection(this.Table)
      .update({ isActive: false })
      .where('id', id)

    const result = await updateQuery

    console.log({ result })

    return result === 1
  }

  async DeleteOne<T>(id : T) : Promise<boolean> {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection(this.Table)
      .delete()
      .where('id', id)

    const result = await updateQuery

    console.log({ result })

    return result === 1
  }
}

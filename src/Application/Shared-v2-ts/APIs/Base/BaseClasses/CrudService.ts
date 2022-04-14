// import {
//   Insertable, Selectable, Table, Updatable, Whereable,
// } from 'zapatos/schema'
// import CrudRepository from '../../../../../Infrastructure/Repositories/Base/CrudRepository'

// export default abstract class CrudService<
//   Entity extends Selectable,
//   Where extends Whereable,
//   Update extends Updatable,
//   Insert extends Insertable
// > {
//   private Repository : CrudRepository<Entity, Where, Update, Insert>

//   /**
//    *
//    */
//   constructor(tableName : Table) {
//     this.Repository = new CrudRepository<Entity, Where, Update, Insert>(tableName)
//   }

//   async FindAll(query? : Where) : Promise<Entity[]> {
//     try {
//       this.Repository.Find(query)
//     }
//   }

//   async FindOne(query? : Where) : Promise<Entity> {

//   }

//   async FindByPk(id : string | number) : Promise<Entity> {

//   }
// }

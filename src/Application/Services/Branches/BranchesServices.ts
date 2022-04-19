/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../../../Infrastructure/StaticFiles/Schemas/zapatos/schema.d.ts" />
import IUserToken from '../../Domains/Authentication/Interfaces/IUserToken'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import PgConnectionFactory from '../../../Infrastructure/DbConnections/PgConnectionFactory'

const rfr = require('rfr')
const BranchesService2 = require('./BranchesServices2.ts')

const { errorMessages, status } = require('../../Shared/libs')
const { FireError } = require('../../Shared/middlewares/errorHandler/errorHandler')
const { sequelize, Sequelize } = require('../../../models')

const {
  Branches, BranchesDeliveryTypes, BranchesPaymentMethods, OpeningHours,
} = rfr('src/models')
const BaseService = require('../BaseClasses/BaseService')
const insertMany = require('../helpers/commonQueries/insertMany')
const BranchesQueries = require('./BranchesQueries')

class BranchServices extends BaseService {
  async findAll(user : IUserToken, query : s.branches.Whereable) {
    const pool = PgConnectionFactory.Create()

    console.log({ query })
    const teste = db.select('branches', query, {
      lateral: {
        opening_hours: db.select(
          'opening_hours',
          { branch_id: db.parent('id') },
          { columns: ['monday', 'thursday', 'friday', 'saturday', 'tuesday', 'wednesday', 'sunday'] },
        ),
        delivery_types: db.select(
          'branches_delivery_types',
          { branch_id: db.parent('id') },
          {
            lateral: {
              teste: db.select('delivery_types', {id: db.})
            }
          }),
      },
    })
    console.log({ teste })

    return await teste.run(pool)

    // const data = await this.model.findAll(this.queries.findAll({ id: user.id, query }))

    // return data
  }

  // async updateOne(id, payload) {
  //   const { deliveryTypes, paymentMethods, openingHours } = payload

  //   try {
  //     await sequelize.transaction(async (transaction) => {
  //       await this.model.update(
  //         this.queries.updateOne(payload), { where: { id }, transaction },
  //       )

  //       await OpeningHours.update({ ...openingHours }, { where: { branchId: id } })

  //       await BranchesDeliveryTypes.destroy({ where: { branchId: id } })

  //       if (deliveryTypes.length) {
  //         await insertMany(
  //           'branches_delivery_types',
  //           id,
  //           ['branch_id', 'delivery_type_id'],
  //           deliveryTypes,
  //         )
  //       }

  //       await BranchesPaymentMethods.destroy({ where: { branchId: id } })

  //       if (paymentMethods.length) {
  //         await insertMany(
  //           'branches_payment_methods',
  //           id,
  //           ['branch_id', 'payment_method_id'],
  //           paymentMethods,
  //         )
  //       }
  //     })
  //   } catch (e) {
  //     throw new FireError(status.internalError, errorMessages.internalError)
  //   }
  //   return {}
  // }

  // async create({ body, user: { id: userId } }) {
  //   const { deliveryTypes, paymentMethods, openingHours } = body
  //   const payload = { ...body, userId }

  //   const { id } = await this.model.create(this.queries.create(payload))

  //   if (!id) throw new FireError(status.notFound, errorMessages.notFound)

  //   try {
  //     await sequelize.transaction(async (transaction) => {
  //       await OpeningHours.create({ branchId: id, ...openingHours }, { transaction })

  //       await sequelize.query(`
  //         INSERT INTO branches_delivery_types (branch_id, delivery_type_id)
  //           VALUES ${deliveryTypes.map(() => '(?)').join(',')}`,
  //       {
  //         replacements: deliveryTypes.map((dt) => ([id, dt])),
  //         type: Sequelize.QueryTypes.INSERT,
  //       })

  //       await sequelize.query(`
  //         INSERT INTO branches_payment_methods (branch_id, payment_method_id)
  //           VALUES ${paymentMethods.map(() => '(?)').join(',')}`,
  //       {
  //         replacements: paymentMethods.map((pm) => ([id, pm])),
  //         type: Sequelize.QueryTypes.INSERT,
  //       })
  //     })
  //   } catch (error) {
  //     throw new FireError(status.internalError, errorMessages.internalError)
  //   }
  //   return {}
  // }
}
const BranchesService = new BranchServices()

module.exports = BranchesService

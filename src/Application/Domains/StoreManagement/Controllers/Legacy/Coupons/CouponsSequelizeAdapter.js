/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

const {
  Branches,
  Conditions,
  Coupons,
  sequelize,
  CouponsConditions,
  CouponsBranches,
} = require('../../../../../../models')
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory')
/* eslint-disable class-methods-use-this */

const { FireError } = require('../Shared/middlewares/errorHandler/errorHandler')
const { errorMessages, status } = require('../Shared/libs')
const insertMany = require('../helpers/commonQueries/insertMany')

class Adapter {
  // No need to be extended yet
  async FindAll(query) {
    const sequelizedQuery = queryWhereFactory(query, { table: 'Coupons' })

    const select = {
      where: sequelizedQuery,
      include: [
        {
          model: Branches,
          as: 'coupomBranches',
          through: { attributes: [] },
          attributes: ['id', 'branchName'],
        },
        {
          model: Conditions,
          as: 'coupomConditions',
          through: { attributes: [] },
        },
      ],
    }

    const coupons = await Coupons.findAll(select)
    return coupons
  }

  async GetConditions() {
    const conditions = await Conditions.findAll()
    return conditions
  }

  async UpdateOne(id, body) {
    const { coupomBranches, coupomConditions } = body

    try {
      await sequelize.transaction(async (transaction) => {
        await Coupons.update(body, { where: { id }, transaction })

        await CouponsConditions.destroy({ where: { id } })

        if (coupomConditions.length) {
          await insertMany(
            'coupons_conditions',
            id,
            ['coupom_id', 'condition_id'],
            coupomConditions,
          )
        }

        await CouponsBranches.destroy({ where: { coupomId: id } })

        if (coupomBranches.length) {
          await insertMany(
            'coupons_branches',
            id,
            ['coupom_id', 'branch_id'],
            coupomBranches,
          )
        }
      })
    } catch (e) {
      console.log(e)
      throw new FireError(status.internalError, errorMessages.internalError)
    }
    return {}
  }

  async Create(body) {
    const { coupomBranches, coupomConditions } = body

    const createBody = { ...body }
    delete createBody.id

    const { id } = await Coupons.create({ ...createBody })

    if (!id) throw new FireError(status.notFound, errorMessages.notFound)

    try {
      await sequelize.transaction(async () => {
        if (coupomConditions.length) {
          await insertMany(
            'coupons_conditions',
            id,
            ['coupom_id', 'condition_id'],
            coupomConditions,
          )
        }

        if (coupomBranches.length) {
          await insertMany(
            'coupons_branches',
            id,
            ['coupom_id', 'branch_id'],
            coupomBranches,
          )
        }
      })
    } catch (e) {
      console.log(e)
      throw new FireError(status.internalError, errorMessages.internalError)
    }
    return {}
  }
}

const CouponsSequelizeAdapter = new Adapter()

module.exports = CouponsSequelizeAdapter

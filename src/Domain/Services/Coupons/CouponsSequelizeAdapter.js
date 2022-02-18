/* eslint-disable class-methods-use-this */

const {
  Branches,
  Conditions,
  Coupons,
} = require('../../../models')
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory')

class Adapter {
// No need to be extended yet
  async FindAll({ query }) {
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

  async GetCoupomByCodeAndBranch(branchId, coupomCode) {
    const select = {
      where: {
        coupomCode,
      },
      include: [
        {
          model: Branches,
          as: 'coupomBranches',
          through: { attributes: [] },
          attributes: [],
          where: {
            id: branchId,
          },
        },
      ],
    }
  }
}

const CouponsSequelizeAdapter = new Adapter()

module.exports = CouponsSequelizeAdapter

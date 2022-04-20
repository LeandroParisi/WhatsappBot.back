/* eslint-disable class-methods-use-this */
const { Op } = require('sequelize')

const {
  Sequelize,
  Branches,
  Products,
  PromotionsProducts,
} = require('../../../../../../models')
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory')

const { timeStamps } = require('../helpers/exclusions')
const QueryInterface = require('../BaseClasses/QueryInterface')

class PromotionQueries extends QueryInterface {
  findAll({ query, user: { id: userId } }, options = {}) {
    const sequelizedQuery = queryWhereFactory(query, { table: 'Promotions' })

    const where = {
      [Op.and]: [
        Sequelize.literal(`"branchesPromotions"."user_id" = '${userId}'`),
      ],
      ...sequelizedQuery,
    }

    if (options?.branchId) {
      where[Op.and].push(Sequelize.literal(`"branchesPromotions"."id" = '${options.branchId}'`))
    }

    return {
      where,
      attributes: {
        exclude: [...timeStamps, 'branchId'],
      },
      include: [
        {
          model: Branches,
          as: 'branchesPromotions',
          through: { attributes: [] },
          attributes: ['id', 'branchName'],
        },
        {
          model: PromotionsProducts,
          as: 'promotionProducts',
          attributes: {
            include: [
              [Sequelize.literal('"promotionProducts->productsPromotions".name'), 'name'],
            ],
            exclude: [
              'id',
              'promotionId',
            ],
          },
          include: [
            {
              model: Products,
              as: 'productsPromotions',
              attributes: [],
            },
          ],
        },
      ],
    }
  }
}

const PromotionsQueries = new PromotionQueries()

module.exports = PromotionsQueries

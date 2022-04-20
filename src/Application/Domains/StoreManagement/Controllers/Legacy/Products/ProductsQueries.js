/* eslint-disable class-methods-use-this */

const { Op } = require('sequelize')
const {
  Branches,
  Sequelize,
  Categories,
  Menus,
} = require('../../../../../../models')
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory')
const { timeStamps } = require('../helpers/exclusions')
const QueryInterface = require('../BaseClasses/QueryInterface')

class ProductQueries extends QueryInterface {
  findAll({ query, user: { id: userId } }) {
    const sequelizedQuery = queryWhereFactory(query, { table: 'Products' })

    return {
      where: {
        [Op.and]: [
          Sequelize.literal(`"branchesProducts"."user_id" = '${userId}'`),
        ],
        ...sequelizedQuery,
      },
      attributes: {
        exclude: [
          ...timeStamps,
          'categoryId',
        ],
      },
      include: [
        {
          model: Branches,
          as: 'branchesProducts',
          attributes: { exclude: [...timeStamps] },
          through: { attributes: [] },
        },
        {
          model: Categories,
          as: 'productCategory',
          attributes: { exclude: [...timeStamps] },
        },
        {
          model: Menus,
          as: 'menuProducts',
          attributes: { exclude: [...timeStamps] },
          through: { attributes: [] },
        },
      ],
      order: [
        ['name', 'ASC'],
      ],
    }
  }
}

const ProductsQueries = new ProductQueries()

module.exports = ProductsQueries

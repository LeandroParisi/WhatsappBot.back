/* eslint-disable class-methods-use-this */
const { Op } = require('sequelize');

const {
  Sequelize,
  Branches,
  Products,
  PromotionsProducts,
} = require('../../models');
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory');

const QueryInterface = require('../Entities/QueryInterface');
const { timeStamps } = require('../helpers/exclusions');

class PromotionQueries extends QueryInterface {
  findAll({ query, user: { id: userId } }) {
    const sequelizedQuery = queryWhereFactory(query, { table: 'Promotions' });

    return {
      where: {
        [Op.and]: [
          Sequelize.literal(`"branchesPromotions"."user_id" = '${userId}'`),
        ],
        ...sequelizedQuery,
      },
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
    };
  }
}

const PromotionsQueries = new PromotionQueries();

module.exports = PromotionsQueries;

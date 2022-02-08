const {
  sequelize, PromotionsProducts, BranchesPromotions, Promotions,
} = require('../../../models');
const PromotionsQueries = require('./PromotionsQueries');
const { FireError } = require('../../Shared/middlewares/errorHandler/errorHandler');
const { status, errorMessages } = require('../../Shared/libs');
const BaseService = require('../BaseClasses/BaseService');
const insertMany = require('../helpers/commonQueries/insertMany');

class PromotionService extends BaseService {
  async updateOne(id, body) {
    const { promotionProducts, branchesPromotions } = body;

    try {
      await sequelize.transaction(async (transaction) => {
        await this.model.update(
          this.queries.updateOne(body), { where: { id }, transaction },
        );

        await PromotionsProducts.destroy({ where: { promotionId: id } });

        if (promotionProducts.length) {
          await insertMany(
            'promotions_products',
            id,
            ['promotion_id', 'product_id', 'attributes'],
            promotionProducts
              .map(({ productId, attributes }) => (
                [
                  productId,
                  JSON.stringify(attributes),
                ]
              )),
          );
        }

        await BranchesPromotions.destroy({ where: { promotionId: id } });

        if (branchesPromotions.length) {
          await insertMany(
            'branches_promotions',
            id,
            ['promotion_id', 'branch_id'],
            branchesPromotions,
          );
        }
      });
    } catch (e) {
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }

  async create({ body }) {
    const requestBody = body;
    delete requestBody.id;

    const { promotionProducts, branchesPromotions } = requestBody;

    const { id } = await this.model.create(this.queries.create(requestBody));

    if (!id) throw new FireError(status.notFound, errorMessages.notFound);

    try {
      await sequelize.transaction(async () => {
        if (promotionProducts.length) {
          await insertMany(
            'promotions_products',
            id,
            ['promotion_id', 'product_id', 'attributes'],
            promotionProducts
              .map(({ productId, attributes }) => (
                [
                  productId,
                  JSON.stringify(attributes),
                ]
              )),
          );
        }

        if (branchesPromotions.length) {
          await insertMany(
            'branches_promotions',
            id,
            ['promotion_id', 'branch_id'],
            branchesPromotions,
          );
        }
      });
    } catch (e) {
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }
// No need to be extended yet
}

const PromotionsService = new PromotionService(Promotions, PromotionsQueries);

module.exports = PromotionsService;

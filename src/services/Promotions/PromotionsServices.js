const { Promotions } = require('../../models');
const {
  sequelize, PromotionsProducts, BranchesPromotions,
} = require('../../models');
const BaseService = require('../Entities/BaseService');
const PromotionsQueries = require('../../queries/Promotions/PromotionsQueries');
const insertMany = require('../../queries/helpers/commonQueries/insertMany');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');
const { status, errorMessages } = require('../../libs');

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
              .map(({ id: productId, attributes }) => (
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
      console.log(e);
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }
// No need to be extended yet
}

const PromotionsService = new PromotionService(Promotions, PromotionsQueries);

module.exports = PromotionsService;

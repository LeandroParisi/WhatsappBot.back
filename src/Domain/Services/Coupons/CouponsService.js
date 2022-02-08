/* eslint-disable class-methods-use-this */
const {
  Coupons, Conditions, sequelize, CouponsConditions, CouponsBranches,
} = require('../../../models');
const BaseService = require('../BaseClasses/BaseService');
const CouponsQueries = require('./CouponsQueries');
const { FireError } = require('../../Shared/middlewares/errorHandler/errorHandler');
const { errorMessages, status } = require('../../Shared/libs');
const insertMany = require('../helpers/commonQueries/insertMany');

class CoupomService extends BaseService {
// No need to be extended yet

  async getConditions() {
    const conditions = await Conditions.findAll();
    return conditions;
  }

  async updateOne(id, body) {
    const { coupomBranches, coupomConditions } = body;

    try {
      await sequelize.transaction(async (transaction) => {
        await this.model.update(
          this.queries.updateOne(body), { where: { id }, transaction },
        );

        await CouponsConditions.destroy({ where: { id } });

        if (coupomConditions.length) {
          await insertMany(
            'coupons_conditions',
            id,
            ['coupom_id', 'condition_id'],
            coupomConditions,
          );
        }

        await CouponsBranches.destroy({ where: { coupomId: id } });

        if (coupomBranches.length) {
          await insertMany(
            'coupons_branches',
            id,
            ['coupom_id', 'branch_id'],
            coupomBranches,
          );
        }
      });
    } catch (e) {
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }

  async validateCoupom({ branchId, coupomCode }) {
    console.log({ branchId });
    console.log({ coupomCode });

    const coupom = await this.model
      .findAll(this.queries.getCoupomByCodeAndBranch(branchId, coupomCode));

    return coupom;
  }
}

const CouponsService = new CoupomService(Coupons, CouponsQueries);

module.exports = CouponsService;

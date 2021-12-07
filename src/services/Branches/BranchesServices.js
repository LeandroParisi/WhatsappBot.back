const rfr = require('rfr');
const { errorMessages, status } = require('../../libs');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');
const { sequelize, Sequelize } = require('../../models');
const insertMany = require('../../queries/helpers/commonQueries/insertMany');

const {
  Branches, BranchesDeliveryTypes, BranchesPaymentMethods, OpeningHours,
} = rfr('src/models');
const BranchesQueries = rfr('src/queries/Branches/BranchesQueries');
const BaseService = require('../Entities/BaseService');

class BranchServices extends BaseService {
  async findAll({ user, query }) {
    const data = await this.model.findAll(this.queries.findAll({ id: user.id, query }));

    return data;
  }

  async updateOne(id, payload) {
    const { deliveryTypes, paymentMethods, openingHours } = payload;

    try {
      await sequelize.transaction(async (transaction) => {
        await this.model.update(
          this.queries.updateOne(payload), { where: { id }, transaction },
        );

        await OpeningHours.update({ ...openingHours }, { where: { branchId: id } });

        await BranchesDeliveryTypes.destroy({ where: { branchId: id } });

        if (deliveryTypes.length) {
          await insertMany(
            'branches_delivery_types',
            id,
            ['branch_id', 'delivery_type_id'],
            deliveryTypes,
          );
        }

        await BranchesPaymentMethods.destroy({ where: { branchId: id } });

        if (paymentMethods.length) {
          await insertMany(
            'branches_payment_methods',
            id,
            ['branch_id', 'payment_method_id'],
            paymentMethods,
          );
        }
      });
    } catch (e) {
      console.log(e);
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }

  async create({ body, user: { id: userId } }) {
    const { deliveryTypes, paymentMethods, openingHours } = body;
    const payload = { ...body, userId };
    console.log({ body });

    const { id } = await this.model.create(this.queries.create(payload));

    if (!id) throw new FireError(status.notFound, errorMessages.notFound);

    try {
      await sequelize.transaction(async (transaction) => {
        await OpeningHours.create({ branchId: id, ...openingHours }, { transaction });

        await sequelize.query(`
          INSERT INTO branches_delivery_types (branch_id, delivery_type_id)
            VALUES ${deliveryTypes.map(() => '(?)').join(',')}`,
        {
          replacements: deliveryTypes.map((dt) => ([id, dt])),
          type: Sequelize.QueryTypes.INSERT,
        });

        await sequelize.query(`
          INSERT INTO branches_payment_methods (branch_id, payment_method_id)
            VALUES ${paymentMethods.map(() => '(?)').join(',')}`,
        {
          replacements: paymentMethods.map((pm) => ([id, pm])),
          type: Sequelize.QueryTypes.INSERT,
        });
      });
    } catch (error) {
      console.log(error);
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }

  async botInitialLoad(query) {
    console.log(query);
    const data = await super.findOne(query);
    console.log(data);
  }
}
const BranchesService = new BranchServices(Branches, BranchesQueries);

module.exports = BranchesService;

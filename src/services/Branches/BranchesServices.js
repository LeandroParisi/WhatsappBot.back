const rfr = require('rfr');

const { Branches } = rfr('src/models');
// const { isSuperset } = rfr('src/utils/setMethods');
const BranchesQueries = rfr('src/queries/Branches/BranchesQueries');
const BaseService = require('../Entities/BaseService');

class BranchServices extends BaseService {
  async findAll({ user, query }) {
    // const { paymentMethod, deliveryType } = query;
    const data = await this.model.findAll(this.queries.findAll({ id: user.id, query }));

    return data;
    // if (paymentMethod) {
    //   data = data.filter(({ paymentMethods }) => {
    //     const branchPaymentMethods = new Set(paymentMethods.map(({ id }) => id));
    //     return isSuperset(branchPaymentMethods, new Set(paymentMethod.split(',')));
    //   });
    // }

    // if (deliveryType) {
    //   data = data.filter(({ deliveryTypes }) => {
    //     const branchDeliveryTypes = new Set(deliveryTypes.map(({ id }) => id));
    //     return isSuperset(branchDeliveryTypes, new Set(deliveryType.split(',')));
    //   });
    // }
  }
}
const BranchesService = new BranchServices(Branches, BranchesQueries);

module.exports = BranchesService;

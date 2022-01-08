const { Customers } = require('../../models');
const CustomersQuery = require('../../queries/Customers/CustomersQueries');
const BaseService = require('../Entities/BaseService');

class CustomerService extends BaseService {
  async CheckCustomer(whatsappId, customerInfo) {
    let customer = await this.findOne({ whatsappId });
    console.log({ customerInfo });

    if (!customer) {
      customer = await this.model.create({ ...customerInfo, whatsappId });
      customer.dataValues.customerAddresses = [];
    }

    return customer;
  }
// No need to be extended yet
}

const CustomersService = new CustomerService(Customers, CustomersQuery);

module.exports = CustomersService;

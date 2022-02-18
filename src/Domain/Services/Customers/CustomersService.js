const { Customers } = require('../../../models')
const BaseService = require('../BaseClasses/BaseService')
const CustomersQuery = require('./CustomersQueries')

class CustomerService extends BaseService {
  async CheckCustomer(whatsappId, customerInfo) {
    let customer = await this.findOne({ whatsappId })

    if (!customer) {
      customer = await this.model.create({ ...customerInfo, whatsappId })
      customer.dataValues.customerAddresses = []
    }

    return customer
  }
// No need to be extended yet
}

const CustomersService = new CustomerService(Customers, CustomersQuery)

module.exports = CustomersService

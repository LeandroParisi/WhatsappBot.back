/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const { default: KnexConnectionFactory } = require('../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory')
const { default: Tables } = require('../../../Data/Entities/Enums/Tables')
const { OrderStatus } = require('../../../Data/Entities/Models/Order')
const { Customers } = require('../../../models')
const BaseService = require('../BaseClasses/BaseService')
const CustomersQuery = require('./CustomersQueries')

class CustomerService extends BaseService {
  async CheckCustomer(whatsappId, info) {
    let customerInfo = await this.findOne({ whatsappId })

    if (!customerInfo) {
      customerInfo = await this.model.create({ ...info, whatsappId })
      customerInfo.dataValues.customerAddresses = []
    }

    // const dbConnection = KnexConnectionFactory.Create()

    // const findQuery = dbConnection(Tables.ORDERS)
    //   .select()
    //   .where({ customer_id: customerInfo.id })
    //   .whereIn('status', [OrderStatus.PLACED, OrderStatus.IN_PRODUCTION, OrderStatus.DISPATCHED])
    //   .first()

    // const hasOrders = !!(await findQuery)

    return {
      customerInfo,
      // information: {
      //   hasOrders,
      // },
    }
  }
// No need to be extended yet
}

const CustomersService = new CustomerService(Customers, CustomersQuery)

module.exports = CustomersService

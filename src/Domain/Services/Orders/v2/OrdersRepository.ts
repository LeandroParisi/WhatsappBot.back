import { Service } from 'typedi'
import KnexConnectionFactory from '../../../../Data/DbConnections/Knex/ConnectionFactory/KnexConnectionFactory'
import { Sequelize } from '../../../../models'
import Cities from '../../../../models/Cities'
import Countries from '../../../../models/Countries'
import CustomerAddresses from '../../../../models/CustomerAddresses'
import Customers from '../../../../models/Customers'
import OrdersProducts from '../../../../models/OrdersProducts'
import Products from '../../../../models/Products'
import States from '../../../../models/States'
import { addressIds, timeStamps } from '../../helpers/exclusions'
import associationsFactory from '../../helpers/QueryBuilders/associationsFactory'
import whereTranslator from '../../helpers/QueryBuilders/whereTranslator'
import { GetOrdersDTO } from './Requests/GetAllOrdersReq'
import { SetOrderDTO } from './Requests/SetOrderStatusReq'
import colBuilder from '../../helpers/QueryBuilders/sequelizeCol'
import DeliveryTypes from '../../../../models/DeliveryTypes'
import PaymentMethods from '../../../../models/PaymentMethods'
import productsAssociationsFactory from '../../helpers/defaultAssociations/productsAssociations'

@Service()
export default class OrdersRepository {
  async GetAll(payload: GetOrdersDTO) {
    const {
      productsAssociations,
    } = productsAssociationsFactory()

    const associations = {
      orderDeliveryType: {
        model: DeliveryTypes,
        column: 'delivery_type',
      },
      orderPaymentMethod: {
        model: PaymentMethods,
        column: 'payment_method',
      },

    }

    const includedAssociations = associationsFactory(associations)
    const { colInclude } = colBuilder(associations)

    console.log({ ...payload })

    const select = {
      where: whereTranslator(payload),
      attributes: {
        include: [
          ...colInclude,
        ],
        exclude: [
          'paymentMethodId',
          'deliveryTypeId',
          'updatedAt',
          'branchId',
          'customerId',
        ],
      },
      include: [
        ...includedAssociations,
        {
          model: OrdersProducts,
          as: 'ordersProducts',
          attributes: {
            include: [
              [Sequelize.literal('"ordersProducts->productsOrders".ingredients'), 'ingredients'],
              [Sequelize.literal('"ordersProducts->productsOrders".base_price'), 'basePrice'],
              [Sequelize.literal('"ordersProducts->productsOrders".description'), 'description'],
              [Sequelize.literal('"ordersProducts->productsOrders".name'), 'name'],
              [Sequelize.literal('"ordersProducts->productsOrders->productCategory".category_name'), 'categoryName'],
            ],
            exclude: [
              'id',
              'orderId',
              'addressId',
            ],
          },
          include: [
            {
              model: Products,
              as: 'productsOrders',
              include: [
                ...productsAssociations,
              ],
              attributes: [],
            },
          ],
        },
        {
          model: CustomerAddresses,
          as: 'orderAddress',
          attributes: {
            include: [
              [Sequelize.literal('"orderAddress->addressCountry".country_name'), 'countryName'],
              [Sequelize.literal('"orderAddress->addressState".state_name'), 'stateName'],
              [Sequelize.literal('"orderAddress->addressCity".city_name'), 'cityName'],
            ],
            exclude: [
              'cityId',
              'countryId',
              'stateId',
              'customerId',
            ],
          },
          include: [
            {
              model: States,
              as: 'addressState',
              attributes: [],
            },
            {
              model: Countries,
              as: 'addressCountry',
              attributes: [],
            },
            {
              model: Cities,
              as: 'addressCity',
              attributes: [],
            },
          ],
        },
        {
          model: Customers,
          as: 'customer',
          attributes: {
            exclude: [
              'isActive',
              ...addressIds,
              ...timeStamps,
            ],
          },
        },
      ],
      order: ['createdAt'],
    }
  }

  async UpdateOne(id: string, updatePayload: SetOrderDTO) {
    const dbConnection = KnexConnectionFactory.Create()

    const updateQuery = dbConnection('orders')
      .update(updatePayload)
      .where('id', id)

    await updateQuery
  }
}

/* eslint-disable no-tabs */
/* eslint-disable class-methods-use-this */
const { Op } = require('sequelize')
const {
  PaymentMethods, DeliveryTypes, Sequelize,
} = require('../../../../../../models')
const QueryInterface = require('../BaseClasses/QueryInterface')
const branchesAssociationsFactory = require('../helpers/defaultAssociations/branchesAssociations')
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory')

const {
  branchesAssociations,
  branchesInclude,
} = branchesAssociationsFactory()

class BranchQueries extends QueryInterface {
  findAll({ id, query }) {
    const sequelizedQuery = queryWhereFactory(query, { table: 'Branches' })

    const {
      paymentMethod,
      deliveryType,
    } = query

    const where = {
      [Op.and]: [
        { userId: id },
      ],
      ...sequelizedQuery,
    }

    if (deliveryType) {
      where[Op.and] = [
        ...where[Op.and],
        Sequelize.literal(
          `exists ( 
          SELECT delivery_type_id FROM branches_delivery_types AS bdt 
		        WHERE bdt.delivery_type_id IN (${deliveryType})
		        AND bdt.branch_id = "Branches".id)`,
        )]
    }

    if (paymentMethod) {
      where[Op.and] = [
        ...where[Op.and],
        Sequelize.literal(
          `exists ( 
          SELECT payment_method_id FROM branches_payment_methods AS bpm
		        WHERE bpm.payment_method_id IN (${paymentMethod})
		        AND bpm.branch_id = "Branches".id)`,
        )]
    }

    const mainQuery = {
      where,
      attributes: {
        include: [
          ...branchesInclude,
        ],
        exclude: [
          'countryId',
          'stateId',
          'cityId',
          'userId',
        ],
      },
      include: [
        ...branchesAssociations,
        {
          model: PaymentMethods,
          as: 'paymentMethods',
          through: { attributes: [] },
        },
        {
          model: DeliveryTypes,
          as: 'deliveryTypes',
          through: { attributes: [] },
        },
      ],
    }

    return mainQuery
  }

  updateOne(payload) {
    return { ...payload }
  }

  findOne(query) {
    return {
      where: query,
      attributes: {
        include: [
          ...branchesInclude,
        ],
        exclude: [
          'countryId',
          'stateId',
          'cityId',
          'userId',
        ],
      },
      include: [
        ...branchesAssociations,
        {
          model: PaymentMethods,
          as: 'paymentMethods',
          through: { attributes: [] },
        },
        {
          model: DeliveryTypes,
          as: 'deliveryTypes',
          through: { attributes: [] },
        },
      ],
    }
  }
}

const BranchesQueries = new BranchQueries()

module.exports = BranchesQueries

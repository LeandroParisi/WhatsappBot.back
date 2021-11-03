const { Coupons } = require('../../models');
const BaseService = require('../Entities/BaseService');
const CouponsQueries = require('../../queries/Coupons/CouponsQueries');

class CoupomService extends BaseService {
// No need to be extended yet
}

const CouponsService = new CoupomService(Coupons, CouponsQueries);

module.exports = CouponsService;

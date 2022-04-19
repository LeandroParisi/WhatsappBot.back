const LocationsRouter = require('./Locations/LocationsRouter')
const UsersRouter = require('./Users/UsersRouter')
const BranchesRouter = require('./Branches/BranchesRouter')
const MenusRouter = require('./Menus/MenusRouter')
const ProductsRouter = require('./Products/ProductsRouter')
const PromotionsRouter = require('./Promotions/PromotionsRouter')
const CustomerRouter = require('../Domains/StoreManagement/Controllers/Legacy/Customers/CustomerRouter')

module.exports = {
  UsersRouter,
  BranchesRouter,
  MenusRouter,
  ProductsRouter,
  PromotionsRouter,
  CustomerRouter,
  LocationsRouter,
}

const LocationsRouter = require('./Locations/LocationsRouter');
const UsersRouter = require('./Users/UsersRouter');
const BranchesRouter = require('./Branches/BranchesRouter');
const OrdersRouter = require('./Orders/OrdersRouter');
const MenusRouter = require('./Menus/MenusRouter');
const ProductsRouter = require('./Products/ProductsRouter');
const PromotionsRouter = require('./Promotions/PromotionsRouter');
const CouponsRouter = require('./Coupons/CouponsRouter');
const CustomerRouter = require('./Customers/CustomerRouter');
const CustomerAddressesRouter = require('./CustomerAddresses/CustomerAddressesRouter');

module.exports = {
  UsersRouter,
  BranchesRouter,
  OrdersRouter,
  MenusRouter,
  ProductsRouter,
  PromotionsRouter,
  CouponsRouter,
  CustomerRouter,
  CustomerAddressesRouter,
  LocationsRouter,
};

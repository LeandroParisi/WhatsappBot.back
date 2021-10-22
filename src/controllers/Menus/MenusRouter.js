const BaseRouter = require('../Entities/BaseRouter');
const MenusController = require('./MenusController');

const MenusRouter = new BaseRouter('/menus', MenusController.getRoutes());

module.exports = MenusRouter;

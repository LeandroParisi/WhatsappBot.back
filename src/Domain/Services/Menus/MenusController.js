const authenticateUser = require('../../Shared/middlewares/validations/authenticateUser');

const BaseController = require('../BaseClasses/BaseController');
const MenusService = require('./MenusService');

class MenuController extends BaseController {
  // No need to extend it yet
}

const MenusController = new MenuController(MenusService);

MenusController.addMiddlewares('all', [authenticateUser]);

module.exports = MenusController;

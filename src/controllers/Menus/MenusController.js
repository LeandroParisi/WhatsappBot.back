const authenticateUser = require('../../middlewares/validations/authenticateUser');
const MenusService = require('../../services/Menus/MenusService');

const BaseController = require('../Entities/BaseController');

class MenuController extends BaseController {
  // No need to extend it yet
}

const MenusController = new MenuController(MenusService);

MenusController.addMiddlewares('all', [authenticateUser]);

module.exports = MenusController;

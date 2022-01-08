const { Menus } = require('../../models');
const BaseService = require('../Entities/BaseService');
const MenusQueries = require('../../queries/Menus/MenusQueries');

class MenuService extends BaseService {
// No need to be extended yet
}

const MenusService = new MenuService(Menus, MenusQueries);

module.exports = MenusService;

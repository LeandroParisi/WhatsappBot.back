const {
  Menus, sequelize, MenusProducts, BranchesMenus,
} = require('../../models');
const MenusQueries = require('./MenusQueries');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');
const { status, errorMessages } = require('../../libs');
const BaseService = require('../BaseClasses/BaseService');
const insertMany = require('../helpers/commonQueries/insertMany');

class MenuService extends BaseService {
  async updateOne(id, body) {
    const { menuBranches, products } = body;

    try {
      await sequelize.transaction(async (transaction) => {
        await this.model.update(
          this.queries.updateOne(body), { where: { id }, transaction },
        );

        await MenusProducts.destroy({ where: { menuId: id } });

        if (products.length) {
          await insertMany(
            'menus_products',
            id,
            ['menu_id', 'product_id'],
            products,
          );
        }

        await BranchesMenus.destroy({ where: { menuId: id } });

        if (menuBranches.length) {
          await insertMany(
            'branches_menus',
            id,
            ['menu_id', 'branch_id'],
            menuBranches,
          );
        }
      });
    } catch (e) {
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }

  async create({ body }) {
    const { menuBranches, products } = body;

    const { id } = await this.model.create(this.queries.create(body));

    if (!id) throw new FireError(status.notFound, errorMessages.notFound);

    try {
      await sequelize.transaction(async () => {
        if (products.length) {
          await insertMany(
            'menus_products',
            id,
            ['menu_id', 'product_id'],
            products,
          );
        }

        if (menuBranches.length) {
          await insertMany(
            'branches_menus',
            id,
            ['menu_id', 'branch_id'],
            menuBranches,
          );
        }
      });
    } catch (error) {
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }
}

const MenusService = new MenuService(Menus, MenusQueries);

module.exports = MenusService;

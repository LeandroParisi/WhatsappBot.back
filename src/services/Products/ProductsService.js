const {
  Products, Categories, sequelize, MenusProducts, BranchesProducts,
} = require('../../models');
const BaseService = require('../Entities/BaseService');
const ProductsQueries = require('../../queries/Products/ProductsQueries');
const insertMany = require('../../queries/helpers/commonQueries/insertMany');
const { FireError } = require('../../middlewares/errorHandler/errorHandler');
const { status, errorMessages } = require('../../libs');

class ProductService extends BaseService {
  // eslint-disable-next-line class-methods-use-this
  async getCategories() {
    const data = await Categories.findAll();
    return data;
  }

  async updateOne(id, body) {
    const { menuProducts, branchesProducts } = body;

    try {
      await sequelize.transaction(async (transaction) => {
        await this.model.update(
          this.queries.updateOne(body), { where: { id }, transaction },
        );

        await MenusProducts.destroy({ where: { productId: id } });

        if (menuProducts.length) {
          await insertMany(
            'menus_products',
            id,
            ['product_id', 'menu_id'],
            menuProducts,
          );
        }

        await BranchesProducts.destroy({ where: { productId: id } });

        if (branchesProducts.length) {
          await insertMany(
            'branches_products',
            id,
            ['product_id', 'branch_id'],
            branchesProducts,
          );
        }
      });
    } catch (e) {
      console.log(e);
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }

  async create({ body }) {
    console.log({ body });
    const { menuProducts, branchesProducts } = body;

    const { id } = await this.model.create(this.queries.create(body));

    if (!id) throw new FireError(status.notFound, errorMessages.notFound);

    try {
      await sequelize.transaction(async () => {
        if (menuProducts.length) {
          await insertMany(
            'menus_products',
            id,
            ['product_id', 'menu_id'],
            menuProducts,
          );
        }

        if (branchesProducts.length) {
          await insertMany(
            'branches_products',
            id,
            ['product_id', 'branch_id'],
            branchesProducts,
          );
        }
      });
    } catch (e) {
      console.log(e);
      throw new FireError(status.internalError, errorMessages.internalError);
    }
    return {};
  }
}

const ProductsService = new ProductService(Products, ProductsQueries);

module.exports = ProductsService;

/* eslint-disable class-methods-use-this */
const rfr = require('rfr');

const { Branches, Products } = rfr('src/models');
const QueryInterface = require('../Entities/QueryInterface');
const { timeStamps } = require('../helpers/exclusions');
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory');

class MenuQueries extends QueryInterface {
  findAll({ query }) {
    const sequelizedQuery = queryWhereFactory(query, { table: 'Menus' });

    return {
      where: { ...sequelizedQuery },
      attributes: {
        exclude: [...timeStamps],
      },
      include: [
        {
          model: Branches,
          as: 'branchesMenus',
          attributes: ['branchName', 'id'],
          through: { attributes: [] },
        },
        {
          model: Products,
          as: 'menuProducts',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
      ],
      order: [
        ['menuName', 'ASC'],
      ],
    };
  }
}

const MenusQueries = new MenuQueries();

module.exports = MenusQueries;

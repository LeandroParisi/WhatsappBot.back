const { Sequelize } = require('../../../models');
const { camelCaseColumn } = require('./utils');

const colBuilder = (sequelize) => (associations) => {
  const colExclude = [];
  const colInclude = [];

  const associationsNames = Object.keys(associations);

  associationsNames.forEach((association) => {
    const { column } = associations[association];
    const camelCasedColumn = camelCaseColumn(column);
    const fkColumn = `${camelCasedColumn}Id`;

    const col = [
      sequelize.col(`${association}.${column}`),
      `${camelCasedColumn}`,
    ];

    colExclude.push(fkColumn);
    colInclude.push(col);
  });

  return { colExclude, colInclude };
};

module.exports = colBuilder(Sequelize);

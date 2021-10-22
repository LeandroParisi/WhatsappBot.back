const { Sequelize } = require('../../../models');
const { camelCaseColumn } = require('./utils');

const colBuilder = (sequelize) => (associations) => {
  const colInclude = [];

  const associationsNames = Object.keys(associations);

  associationsNames.forEach((association) => {
    const { column = '' } = associations[association];

    if (column) {
      const camelCasedColumn = camelCaseColumn(column);

      const col = [
        sequelize.col(`${association}.${column}`),
        `${camelCasedColumn}`,
      ];

      colInclude.push(col);
    }
  });

  return { colInclude };
};

module.exports = colBuilder(Sequelize);

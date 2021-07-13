const { Sequelize } = require('../../../models');
const capitalize = require('../../../utils/capitalize');

const camelCaseColumn = (column) => {
  let camelCased = '';
  const [firstWord, ...otherWords] = column.split('_');
  camelCased = firstWord;
  otherWords.forEach((word) => {
    camelCased += capitalize(word);
  });
  return camelCased;
};

const literalBuilder = (sequelize) => (associations) => {
  const assExclude = [];
  const assInclude = [];

  const associationsNames = Object.keys(associations);
  associationsNames.forEach((association) => {
    const { column } = associations[association];
    const camelCasedColumn = camelCaseColumn(column);
    const fkColumn = `${camelCasedColumn}Id`;

    const literalString = `'"${association}".${column}'`.replace(/\\'/, '');

    const literal = [
      sequelize.literal(literalString),
      `${camelCasedColumn}`,
    ];

    assExclude.push(fkColumn);
    assInclude.push(literal);
  });

  return { assExclude, assInclude };
};

module.exports = literalBuilder(Sequelize);

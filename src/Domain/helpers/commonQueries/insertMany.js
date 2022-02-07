const { sequelize, Sequelize } = require('../../../models');

const insertMany = async (tableName, id, columnNames, payload) => {
  let treatedPayload = [...payload];
  if (typeof treatedPayload[0] !== typeof []) {
    treatedPayload = treatedPayload.map((el) => [el]);
  }

  await sequelize.query(`
  INSERT INTO ${tableName} (${columnNames.join(',')})
    VALUES ${payload.map(() => '(?)').join(',')}`,
  {
    replacements: treatedPayload.map((dt) => ([id, ...dt])),
    type: Sequelize.QueryTypes.INSERT,
  });
};

module.exports = insertMany;

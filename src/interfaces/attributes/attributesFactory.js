/* eslint-disable max-len */
/**
 *
 * @param {array} attributes array of attributes to be created, each attribute must follow this interface: [name: string, price: integer, description: string]
 * @returns
 */
const attributesFactory = (attributes) => attributes.map(([name, price, description]) => ({
  name,
  price,
  description,
}));

module.exports = attributesFactory;

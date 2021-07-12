/* eslint-disable max-len */
/**
 *
 * @param {array} attributes array of attributes to be created, each attribute must follow this interface: [name: string, price: integer, description: string, min: integer, max: integer]
 * @returns
 */
const productsAttrFactory = (attributes) => attributes.map(([name, price, description, min = null, max = null]) => ({
  name,
  price,
  description,
  min,
  max,
}));

/**
 *
 * @param {Array.<[type: String, name: String, price: Number, quantity: Number]>} attributes array of attributes to be created, each attribute must follow this interface: [type: string, name: string, price: integer, quantity: integer]
 * @returns
 */
const orderProductsAttrFactory = (attributes) => attributes.map(([type, name, price, quantity = 1]) => ({
  type,
  name,
  price,
  quantity,
}));

module.exports = { productsAttrFactory, orderProductsAttrFactory };

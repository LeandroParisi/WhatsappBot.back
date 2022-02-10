const { Op } = require('sequelize')

const whereTranslator = (query) => {
  const translatedQuery = { ...query }

  const queryKeys = Object.keys(query)
  const queryValues = Object.values(query)

  queryValues.forEach((value, index) => {
    const isNegation = /^!/.test(value)

    if (isNegation) {
      const newValue = value.replace('!', '')
      translatedQuery[queryKeys[index]] = { [Op.ne]: newValue }
    }
  })
  return translatedQuery
}

module.exports = whereTranslator

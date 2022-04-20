const capitalize = require('../../Shared/utils/capitalize')

const camelCaseColumn = (column) => {
  let camelCased = ''
  const [firstWord, ...otherWords] = column.split('_')
  camelCased = firstWord
  otherWords.forEach((word) => {
    camelCased += capitalize(word)
  })
  return camelCased
}

module.exports = { camelCaseColumn }

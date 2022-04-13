const queryAttributesFactory = ({ columns }) => {
  let attributes = []

  if (columns) {
    attributes = columns.split(',')
  }

  if (attributes.length) {
    return attributes
  }

  return null
}

module.exports = queryAttributesFactory

const associationsFactory = (associations) => {
  const associationsNames = Object.keys(associations)

  const includedAssociations = []

  associationsNames.forEach((association) => {
    const { model, attributes = [], options = {} } = associations[association]

    includedAssociations.push({
      model,
      attributes,
      as: association,
      ...options,
    })
  })

  return includedAssociations
}

module.exports = associationsFactory

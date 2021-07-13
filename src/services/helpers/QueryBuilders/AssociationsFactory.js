const associationsFactory = (associations) => {
  const associationsNames = Object.keys(associations);

  const includedAssociations = [];

  associationsNames.forEach((association) => {
    const { model } = associations[association];

    includedAssociations.push({
      model,
      attributes: [],
      as: association,
    });
  });

  return includedAssociations;
};

module.exports = associationsFactory;

const throughAssociationsFactory = (associations) => {
  const associationsNames = Object.keys(associations);

  const includedAssociations = [];

  associationsNames.forEach((association) => {
    const {
      model, throughAttributes = [], exclude, include, innerAssociations = [],
    } = associations[association];

    includedAssociations.push({
      model,
      attributes: {
        exclude,
        include,
      },
      through: { attributes: throughAttributes },
      as: association,
      include: innerAssociations,
    });
  });

  return includedAssociations;
};

module.exports = throughAssociationsFactory;

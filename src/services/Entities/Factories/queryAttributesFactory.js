const queryAttributesFactory = ({ columns }) => {
  let attributes = [];

  if (attributes) {
    attributes = columns.split(',');
  }

  return attributes;
};

module.exports = queryAttributesFactory;

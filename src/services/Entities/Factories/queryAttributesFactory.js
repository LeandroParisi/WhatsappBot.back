const queryAttributesFactory = ({ columns }) => {
  let attributes = [];

  if (columns) {
    attributes = columns.split(',');
  }

  return attributes;
};

module.exports = queryAttributesFactory;

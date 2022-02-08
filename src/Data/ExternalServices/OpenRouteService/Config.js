const openrouteservice = require('openrouteservice-js');
require('dotenv');

const Geocode = new openrouteservice.Geocode({ api_key: process.env.GEO_CODE_API_KEY });

const Matrix = new openrouteservice.Matrix({ api_key: process.env.GEO_CODE_API_KEY });

module.exports = {
  Geocode,
  Matrix,
};

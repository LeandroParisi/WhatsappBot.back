import openrouteservice from 'openrouteservice-js'

require('dotenv')

// API documentation: https://openrouteservice.org/dev/#/api-docs

export default class OpenRouteConfig {
  public Geocode = 
}

const Geocode = new openrouteservice.Geocode({ api_key: process.env.GEO_CODE_API_KEY })

const Matrix = new openrouteservice.Matrix({ api_key: process.env.GEO_CODE_API_KEY })

module.exports = {
  Geocode,
  Matrix,
}

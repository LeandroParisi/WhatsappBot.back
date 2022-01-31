const LocationsService = require('../../services/Locations/LocationsServices');
const { status } = require('../../libs');

const BaseController = require('../Entities/BaseController');

class Controller extends BaseController {
  async findAll(_req, res) {
    const data = await this.service.findAll();
    res.status(status.ok).json({ data });
  }
}

const LocationsController = new Controller(LocationsService);

LocationsController.removeEndpoints([
  'deleteOne',
  'activate',
  'deActivate',
  'findOne',
  'findByPk',
  'updateOne',
  'deleteOne',
  'create',
]);
// LocationsController.addMiddlewares('all', [authenticateUser]);

module.exports = LocationsController;

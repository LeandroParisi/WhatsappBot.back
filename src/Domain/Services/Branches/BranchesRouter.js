const BaseRouter = require('../BaseClasses/BaseRouter')
const BranchesController = require('./BranchesController')

const BranchesRouter = new BaseRouter('/branches', BranchesController.getRoutes())

module.exports = BranchesRouter

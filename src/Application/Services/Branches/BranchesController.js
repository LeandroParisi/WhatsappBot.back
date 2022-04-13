const authenticateUser = require('../../Shared/middlewares/validations/authenticateUser')
const authenticateBotUser = require('../../Shared/middlewares/validations/authenticateBotUser')

const BaseController = require('../BaseClasses/BaseController')
const { METHODS, status } = require('../../Shared/libs')
const PromotionsService = require('../Promotions/PromotionsServices')
const UsersService = require('../Users/UsersService')
const BranchesService = require('./BranchesServices')
// const { _resMessages } = require('../../Shared/libs');

class BranchController extends BaseController {
  constructor(service) {
    super(service)

    this.newRoutes = {
      botInitialLoad: {
        endpoint: '/bot/initialLoad',
        method: METHODS.GET,
        handler: this.botInitialLoad.bind(this),
        localMiddleware: [authenticateBotUser],
      },
    }
  }

  async findAll(req, res) {
    const { user, query } = req
    const data = await this.service.findAll({ user, query })
    res.status(status.ok).json({ data })
  }

  async botInitialLoad(req, res) {
    const { id: userId } = req.user
    const { whatsappNumber } = req.body

    // TODO: possível erro de não achar a branch com o whatsappNumber passado
    // TODO: deletar BranchesPromotions do Promotions (tinha que ser feito em nível de service)
    const data = await this.service.findOne({ userId, whatsappNumber })
    const promotions = await PromotionsService.findAll(
      { query: { isActive: true }, user: req.user },
      { branchId: data.dataValues.id },
    )

    const user = await UsersService.findByPk(userId)
    data.dataValues.promotions = promotions
    data.dataValues.botName = user.botName

    res.status(status.ok).json({ ok: true, data })
  }
}

const BranchesController = new BranchController(BranchesService)

BranchesController.addRoutes(BranchesController.newRoutes)

BranchesController.addMiddlewares(
  [
    'activate',
    'deActivate',
    'findOne',
    'findByPk',
    'updateOne',
    'deleteOne',
    'findAll',
    'create',
  ],
  [authenticateUser],
)

module.exports = BranchesController

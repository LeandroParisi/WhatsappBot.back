/* eslint-disable class-methods-use-this */
const BaseController = require('../BaseClasses/BaseController')
const {
  METHODS, status, resMessages, errorMessages,
} = require('../../Shared/libs')
const { FireError } = require('../../Shared/middlewares/errorHandler/errorHandler')
const { decode } = require('../../Shared/authentication/jwtConfig')
const UsersService = require('./UsersService')

class UserController extends BaseController {
  constructor(service) {
    super(service)

    this.newRoutes = {
      botLogin: {
        endpoint: '/bot/login',
        method: METHODS.POST,
        handler: this.botLogin.bind(this),
        localMiddleware: [],
      },

      botSessionAuth: {
        endpoint: '/bot/sessionAuth',
        method: METHODS.POST,
        handler: this.botAuth.bind(this),
        localMiddleware: [],
      },

      login: {
        endpoint: '/login',
        method: METHODS.POST,
        handler: this.login.bind(this),
        localMiddleware: [],
      },

      auth: {
        endpoint: '/auth',
        method: METHODS.GET,
        handler: this.auth.bind(this),
        localMiddleware: [],
      },
    }
  }

  async login(req, res) {
    const payload = req.body
    const token = await this.service.login(payload)
    res.cookie(
      'wbt',
      token,
      {
        maxAge: 86400000,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      },
    )
    res.status(status.ok).json({ message: resMessages.loginOK })
  }

  async auth(req, res) {
    const { wbt } = req.cookies
    if (!wbt) throw new FireError(status.unauthorized, errorMessages.expiredSession)
    try {
      decode(wbt)
    } catch (error) {
      throw new FireError(status.unauthorized, errorMessages.expiredSession)
    }
    res.status(status.ok).json({ ok: true })
  }

  async botLogin(req, res) {
    const payload = req.body
    const data = await this.service.botLogin(payload)
    res.status(status.ok).json({ message: resMessages.loginOK, data })
  }

  async botAuth(req, res) {
    const { token } = req.body
    if (!token) throw new FireError(status.unauthorized, errorMessages.expiredSession)
    try {
      decode(token)
    } catch (error) {
      throw new FireError(status.unauthorized, errorMessages.expiredSession)
    }
    res.status(status.ok).json({ ok: true })
  }
}

const UsersController = new UserController(UsersService)

UsersController.addRoutes(UsersController.newRoutes)

UsersController.removeEndpoints(['deleteOne'])

module.exports = UsersController

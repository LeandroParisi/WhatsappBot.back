/* eslint-disable no-shadow */
import 'reflect-metadata'
import { Application } from 'express'
import Container, { Service } from 'typedi'
import OrdersRouter from './Domain/Services/Orders/v2/OrdersRouter'
import {
  BranchesRouter, CouponsRouter, CustomerAddressesRouter, CustomerRouter, LocationsRouter, MenusRouter, ProductsRouter, PromotionsRouter, UsersRouter,
} from './Domain/Services'

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { errorHandler } = require('./Domain/Shared/middlewares/errorHandler/errorHandler')
// const {
//   UsersRouter,
//   BranchesRouter,
//   OrdersRouter,
//   MenusRouter,
//   ProductsRouter,
//   PromotionsRouter,
//   CouponsRouter,
//   CustomerRouter,
//   CustomerAddressesRouter,
//   LocationsRouter,
// } = require('./Domain/Services')

require('dotenv').config()

const corsOptions = {
  credentials: true,
  origin: true,
}

@Service()
class Main {
  static PORT = process.env.PORT || 3000

  private app : Application

  private readonly OrdersRouter : OrdersRouter

  /**
   *
   */
  constructor(
  ) {
    this.app = express()
    this.OrdersRouter = Container.get(OrdersRouter)
  }

  public Setup() {
    this.app.use(cors(corsOptions))
    this.app.use(express.json())
    this.app.use(cookieParser())
  }

  public Start() {
    this.app.use(PromotionsRouter.basePath, PromotionsRouter.setRouter())
    this.app.use(UsersRouter.basePath, UsersRouter.setRouter())
    this.app.use(BranchesRouter.basePath, BranchesRouter.setRouter())
    this.app.use(this.OrdersRouter.BasePath, this.OrdersRouter.SetRouter())
    this.app.use(MenusRouter.basePath, MenusRouter.setRouter())
    this.app.use(ProductsRouter.basePath, ProductsRouter.setRouter())
    this.app.use(CouponsRouter.basePath, CouponsRouter.setRouter())
    this.app.use(CustomerRouter.basePath, CustomerRouter.setRouter())
    this.app.use(CustomerAddressesRouter.basePath, CustomerAddressesRouter.setRouter())
    this.app.use(LocationsRouter.basePath, LocationsRouter.setRouter())

    this.app.use(errorHandler)

    this.app.listen(Main.PORT, () => console.log(`listening to port ${Main.PORT}`))
  }
}

const Server = new Main()

Server.Setup()
Server.Start()

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-shadow */
import 'reflect-metadata'
import { Application } from 'express'
import * as db from 'zapatos/db'
import Container, { Service } from 'typedi'
import {
  BranchesRouter,
  CustomerRouter, LocationsRouter,
  MenusRouter,
  ProductsRouter,
  PromotionsRouter,
  UsersRouter,
} from './Application/Services'
import OrdersRouter from './Application/Services/Orders/OrdersRouter'
import CustomersAddressesRouter from './Application/Services/CustomerAddresses/CustomerAddressesRouter'
import CouponsRouter from './Application/Services/Coupons/CouponsRouter'
import ErrorCatcher from './Application/Shared-v2-ts/Middlewares/ErrorHandler/ErrorCatcher'

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

require('dotenv').config()

const corsOptions = {
  credentials: true,
  origin: true,
}

@Service()
class Main {
  static PORT = process.env.PORT || 3000

  private app : Application

  /**
   *
   */
  constructor(
    private OrderRouter : OrdersRouter,
    private readonly CustomerAddressesRouter : CustomersAddressesRouter,
    private readonly CoupomRouter : CouponsRouter,
  ) {
    this.app = express()
  }

  public Setup() {
    this.app.use(cors(corsOptions))
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.ConfigureZapatos()
  }

  // eslint-disable-next-line class-methods-use-this
  ConfigureZapatos() {
    db.setConfig({
      queryListener: (q) => console.log({ query: q.text }, { values: q.values }),
    })
  }

  public Start() {
    this.app.use(PromotionsRouter.basePath, PromotionsRouter.setRouter())
    this.app.use(UsersRouter.basePath, UsersRouter.setRouter())
    this.app.use(BranchesRouter.basePath, BranchesRouter.setRouter())
    this.app.use(this.OrderRouter.BasePath, this.OrderRouter.SetRouter())
    this.app.use(MenusRouter.basePath, MenusRouter.setRouter())
    this.app.use(ProductsRouter.basePath, ProductsRouter.setRouter())
    this.app.use(this.CoupomRouter.BasePath, this.CoupomRouter.SetRouter())
    this.app.use(CustomerRouter.basePath, CustomerRouter.setRouter())
    this.app.use(this.CustomerAddressesRouter.BasePath, this.CustomerAddressesRouter.SetRouter())
    this.app.use(LocationsRouter.basePath, LocationsRouter.setRouter())

    this.app.use(ErrorCatcher.HandleError)

    this.app.listen(Main.PORT, () => console.log(`listening to port ${Main.PORT}`))
  }
}

const Server = Container.get(Main)

Server.Setup()
Server.Start()

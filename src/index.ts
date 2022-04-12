/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-shadow */
import 'reflect-metadata'
import { Application } from 'express'
import Container, { Service } from 'typedi'
import CouponsService from './Domain/Services/Coupons/CouponsService'

require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

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
  ) {
    this.app = express()
  }

  public Setup() {
    this.app.use(cors(corsOptions))
    this.app.use(express.json())
    this.app.use(cookieParser())
  }

  public Start() {
    Container.get(CouponsService).Create().then()
    this.app.use('/health', (req, res) => res.send('Alive'))

    // this.app.use(ErrorCatcher.HandleError)

    this.app.listen(Main.PORT, () => console.log(`listening to port ${Main.PORT}`))
  }
}

const Server = new Main()

Server.Setup()
Server.Start()

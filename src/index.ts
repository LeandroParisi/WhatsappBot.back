/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-shadow */
import 'reflect-metadata'
import { Application } from 'express'
import { Service } from 'typedi'
import BaseRepository from './Infrastructure/Repositories/Base/BaseRepository'
import TableNames from './Infrastructure/Enums/TableNames'
import { branches } from 'zapatos/schema'

require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const corsOptions = {
  credentials: true,
  origin: true,
}

const t = new BaseRepository<branches.Whereable>(TableNames.branches)

t.FindOne({}).then()

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
    this.app.use('/health', (req, res) => res.send('Alive'))

    // this.app.use(ErrorCatcher.HandleError)

    this.app.listen(Main.PORT, () => console.log(`listening to port ${Main.PORT}`))
  }
}

const Server = new Main()

Server.Setup()
Server.Start()

import { IncomingHttpHeaders } from 'http'
import { Request } from 'express'

export interface IBody<T> {
  Body : T
}

export interface IParams<T> {
  Params : T
}

export interface IQuery<T> {
  Query : T
}

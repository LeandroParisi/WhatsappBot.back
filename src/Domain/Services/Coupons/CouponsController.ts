import { Request, Response } from 'express'
import { Service } from 'typedi'
import { StatusCode } from '../../Shared-v2-ts/Enums/Status'
import { resMessages } from '../../Shared/libs'
import BaseController from '../BaseClasses/v2/BaseController'
import CouponsHandler from './CouponsHandler'
import ActivateCoupomRequest from './Requests/Activate/Request'
import CreateCoupomRequest from './Requests/Create/Request'
import DeActivateCoupomRequest from './Requests/DeActivate/Request'
import DeleteCoupomRequest from './Requests/DeleteOne/Request'
import FindAllCouponsRequest from './Requests/FindAll/Request'
import UpdateCoupomRequest from './Requests/UpdateOne/Request'
import ValidateCoupomRequest from './Requests/ValidateCoupom/Request'

@Service()
export default class CouponsController extends BaseController {
  /**
   *
   */
  constructor(
    private readonly Handler : CouponsHandler,
  ) {
    super()
  }

  Activate() {
    return async (req : ActivateCoupomRequest, res : Response) => {
      const { id } = req.params
      await this.Handler.Activate(id)
      return res.status(StatusCode.OK).json({ data: 'ok', message: resMessages.updateSuccess })
    }
  }

  DeActivate() {
    return async (req : DeActivateCoupomRequest, res : Response) => {
      const { id } = req.params
      await this.Handler.DeActivate(id)
      return res.status(StatusCode.OK).json({ data: 'ok', message: resMessages.updateSuccess })
    }
  }

  UpdateOne() {
    return async (req : UpdateCoupomRequest, res : Response) => {
      const payload = req.body
      const { id } = req.params
      await this.Handler.UpdateOne(id, payload)
      return res.status(StatusCode.OK).json({ data: 'ok', message: resMessages.updateSuccess })
    }
  }

  DeleteOne() {
    return async (req : DeleteCoupomRequest, res : Response) => {
      const { id } = req.params
      await this.Handler.DeleteOne(id)
      return res.status(StatusCode.OK).json({ data: 'ok', message: resMessages.deleted })
    }
  }

  FindAll() {
    return async (req : FindAllCouponsRequest, res : Response) => {
      const { query } = req
      const data = await this.Handler.FindAll(query)
      return res.status(StatusCode.OK).json({ data })
    }
  }

  Create() {
    return async (req : CreateCoupomRequest, res : Response) => {
      const { body } = req
      await this.Handler.Create(body)
      return res.status(StatusCode.CREATED).json({ data: 'ok', message: resMessages.created })
    }
  }

  GetConditions() {
    return async (req : Request, res : Response) => {
      const data = await this.Handler.GetConditions()
      return res.status(StatusCode.OK).json({ data })
    }
  }

  ValidateCoupom() {
    return async (req : ValidateCoupomRequest, res : Response) => {
      const data = await this.Handler.ValidateCoupom(req.params)
      return res.status(StatusCode.OK).json({ data })
    }
  }
}

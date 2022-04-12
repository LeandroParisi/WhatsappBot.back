import { Service } from 'typedi'

@Service()
export default class StoreManagementController {
  GetAllCoupons(req : FindAllCouponsRequest, res : Response) {
    const { query } = req
    const data = await this.Handler.FindAll(query)
    return res.status(StatusCode.OK).json({ data })
  }
}

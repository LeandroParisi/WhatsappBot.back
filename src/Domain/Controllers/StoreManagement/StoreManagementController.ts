import { Service } from 'typedi'
import CouponsService from '../../Services/Coupons/CouponsService'
import FindAllCouponsRequest from './Requests/Coupons/FindAll/Request'

@Service()
export default class StoreManagementController {
  /**
   *
   */
  constructor(
    private CouponsServices : CouponsService,
  ) {
    super()
  }

  async GetAllCoupons(req : FindAllCouponsRequest, res : Response) {
    const { query } = req
    const data = await this.CouponsServices.FindAll(query)
    return res.status(StatusCode.OK).json({ data })
  }
}

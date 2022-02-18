import { Request } from 'express'
import FindAllCouponsQuery from './Query';

export default interface FindAllCouponsRequest extends Request {
  query : FindAllCouponsQuery
}

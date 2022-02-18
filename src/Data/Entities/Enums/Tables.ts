/* eslint-disable no-shadow */
const Tables = {
  ORDERS: 'orders',
  CUSTOMER_ADDRESSES: 'customer_addresses',
  BRANCHES: 'branches',
  COUPONS: 'coupons',
  PROMOTIONS: 'promotions',
} as const

export type TablesKeys = keyof typeof Tables;
export type TablesValues = typeof Tables[TablesKeys];

export default Tables

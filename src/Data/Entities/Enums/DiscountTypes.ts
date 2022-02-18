/* eslint-disable no-shadow */
const DiscountTypes = {
  ABSOLUTE_VALUE: 'absolute_value',
  PERCENTAGE: 'percentage',
} as const

export type DiscountTypesKeys = keyof typeof DiscountTypes;
export type DiscountTypesValues = typeof DiscountTypes[DiscountTypesKeys];

export default DiscountTypes

/* eslint-disable no-shadow */
const DeliveryFeeTypes = {
  UNIQUE: 'unique',
  RADIUS: 'radius',
} as const

export type DeliveryFeeTypesKeys = keyof typeof DeliveryFeeTypes;
export type DeliveryFeeTypesValues = typeof DeliveryFeeTypes[DeliveryFeeTypesKeys];

export default DeliveryFeeTypes

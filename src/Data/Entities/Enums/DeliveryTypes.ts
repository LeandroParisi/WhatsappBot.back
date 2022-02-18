/* eslint-disable no-shadow */
const DeliveryTypes = {
  DELIVERY: 1,
  COUNTER_PICKUP: 2,
  ON_SPOT_CONSUMPTION: 3,
} as const

export type DeliveryTypesKeys = keyof typeof DeliveryTypes;
export type DeliveryTypesValues = typeof DeliveryTypes[DeliveryTypesKeys];

export default DeliveryTypes

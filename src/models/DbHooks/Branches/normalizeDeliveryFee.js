module.exports = (deliveryFees) => {
  const normalizedDeliveryFees = { ...deliveryFees }
  if (deliveryFees.type === 'unique') {
    normalizedDeliveryFees.fees = Number(normalizedDeliveryFees.fees)
  }

  return normalizedDeliveryFees
}

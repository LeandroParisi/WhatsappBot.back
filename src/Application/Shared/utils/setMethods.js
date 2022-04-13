/* eslint-disable no-restricted-syntax */
const isSuperset = (set, subset) => {
  for (const elem of subset) {
    if (!set.has(Number(elem))) {
      return false
    }
  }
  return true
}

module.exports = {
  isSuperset,
}

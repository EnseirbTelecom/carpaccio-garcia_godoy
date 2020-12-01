module.exports = class Bill {
  static calcBill (prices, quantities) {
    if (prices.length !== quantities.length) {
      throw new Error('Lists are not the same length')
    } else {
      const numberOfElements = prices.length
      let result = 0
      for (let i = 0; i < numberOfElements; i++) {
        if (prices[i] < 0 || quantities[i] < 0) {
          throw new Error('Negative values detected')
        }
        result = result + prices[i] * quantities[i]
      }
      return result
    }
  }
}

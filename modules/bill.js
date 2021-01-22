const tax = {
  DE: '20',
  UK: '21',
  FR: '20',
  IT: '25',
  ES: '19',
  PL: '21',
  RO: '20',
  NL: '20',
  BE: '24',
  EL: '20',
  CZ: '19',
  PT: '23',
  HU: '27',
  SE: '23',
  AT: '22',
  BG: '21',
  DK: '21',
  FI: '17',
  SK: '18',
  IE: '21',
  HR: '23',
  LT: '23',
  SI: '24',
  LV: '20',
  EE: '22',
  CY: '21',
  LU: '25',
  MT: '20'
}

module.exports = class Bill {
  static calcBill (prices, quantities, country) {
    if (!this.isSameLength(prices, quantities)) {
      throw new Error('Lists are not the same length')
    } else if (this.hasNegativeValue(prices) || this.hasNegativeValue(quantities)) {
      throw new Error('Lists contain negative values')
    } else if (typeof tax[country] === 'undefined') {
      throw new Error('The country code does not exist')
    } else {
      const numberOfElements = prices.length
      let result = 0
      for (let i = 0; i < numberOfElements; i++) {
        result = result + prices[i] * quantities[i]
      }
      result = result * (tax[country] / 100 + 1)
      return result
    }
  }

  static isSameLength (tab1, tab2) {
    return tab1.length === tab2.length
  }

  static hasNegativeValue (tab) {
    let result = false
    let index = 0
    while (!result && index <= tab.length) {
      if (tab[index] < 0) {
        result = true
      } else {
        index++
      }
    }
    return result
  }
}

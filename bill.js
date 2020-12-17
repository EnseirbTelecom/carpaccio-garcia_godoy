module.exports = class Bill {
  
  static calcBill (prices, quantities) {
    if (!this.isSameLength(prices, quantities)) {
      throw new Error('Lists are not the same length')
    } 
    else if(this.hasNegativeValue(prices) || this.hasNegativeValue(quantities)){
      throw new Error('Lists contain negative values')
    } else {
      const numberOfElements = prices.length
      let result = 0
      for (let i = 0; i < numberOfElements; i++) {
        result = result + prices[i] * quantities[i]
      }
      return result
    }
  }

  static isSameLength(tab1, tab2) {
    return tab1.length === tab2.length
  }
  static hasNegativeValue(tab) {
    let result = false
    let index = 0
    while(!result && index <= tab.length) {
        if(tab[index] < 0){
          result = true;
        } else {
          index++
        }
    }
    return result
  }
}

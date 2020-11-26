module.export = class Bill {
    constructor(prices, quantities) {
      this.prices = prices;
      this.quantities = quantities;
    }
    get total() {
        return this.calcTotal();
      }
    
      calcTotal() {
        if( this.prices.length != this.quantities.length ){
            return -1
        } else{
            const numberOfElements = this.prices.length;
            let result = 0;
            for(i=0;i<numberOfElements;i++){
                result = result + prices[i] * quantities[i];
        }
        return result;
      }
  }
}
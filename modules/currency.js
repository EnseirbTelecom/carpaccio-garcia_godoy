const fetch = require('node-fetch')
let currencies = {}

fetch('https://api.exchangeratesapi.io/latest')
  .then(response => response.json())
  .then(response => {
    currencies = response.rates
  })
  .catch(error => console.log('Erreur : ' + error))

module.exports = class Currency {
  static calcCurrencyPrice (price, currency) {
    console.log(currencies[currency])
    if (currency === undefined) {
      return price
    } else if (typeof currencies[currency] === 'undefined') {
      throw new Error('The currency does not exist')
    } else {
      return price * currencies[currency]
    }
  }
}

const Currency = require('../modules/currency')

test('Prices = 1, Currency = USD', () => {
  expect(Currency.calcCurrencyPrice(1, 'USD')).toBe(1.2158)
})

test('Prices = 1, without Currency', () => {
  expect(Currency.calcCurrencyPrice(1)).toBe(1)
})

test("Price= 1, Currency doesn't exist", () => {
  expect(() => { Currency.calcCurrencyPrice(1, 'ZZZ') }).toThrowError(new Error('The currency does not exist'))
})

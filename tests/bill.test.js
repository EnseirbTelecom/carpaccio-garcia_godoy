const Bill = require('../modules/bill')

test('Prices = [10,20], Quantities = [1,2] and country = DE expected to be 60', () => {
  expect(Bill.calcBill([10, 20], [1, 2], 'DE')).toBe(60)
})

test("Prices and quantities don't have the same length", () => {
  expect(() => { Bill.calcBill([10, 20, 30], [1, 2], 'DE') }).toThrowError(new Error('Lists are not the same length'))
})

test('Negative value in prices', () => {
  expect(() => { Bill.calcBill([-10, 20], [1, 2], 'DE') }).toThrowError(new Error('Lists contain negative values'))
})

test('Negative value in quantities', () => {
  expect(() => { Bill.calcBill([10, 20], [1, -2], 'DE') }).toThrowError(new Error('Lists contain negative values'))
})

test('Wrong country', () => {
  expect(() => { Bill.calcBill([10, 20], [1, 2], 'ZZ') }).toThrowError(new Error('The country code does not exist'))
})

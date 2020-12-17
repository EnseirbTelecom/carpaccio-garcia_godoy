const Bill = require('./bill')

test('Prices = [10,20] and Quantities = [1,2] expected to be 50', () => {
  expect(Bill.calcBill([10, 20], [1, 2])).toBe(50)
})

test("Prices and quantities don't have the same length", () => {
  expect(Bill.calcBill([10, 20, 30], [1, 2])).toThrowError(new Error('Lists are not the same length'))
})

test('Negative value in prices', () => {
  expect(Bill.calcBill([-10, 20], [1, 2])).toThrowError(new Error('Lists contain negative values'))
})

test('Negative value in quantities', () => {
  expect(Bill.calcBill([10, 20], [1, -2])).toThrowError(new Error('Lists contain negative values'))
})

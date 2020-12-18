const Discount = require('../modules/discount')

/** ****************** NO DISCOUNT ****************** **/
test('Price 10 and no discount expected to be 10', () => {
  expect(Discount.caclDiscountedPrice(10, 'NO_DISCOUNT')).toBe(10)
})

/** ****************** FLAT DISCOUNT ********************/
test('Price 100 and flat discount expected to be 70', () => {
  expect(Discount.caclDiscountedPrice(100, 'FLAT_DISCOUNT')).toBe(70)
})

/** ****************** PROGRESSIVE DISCOUNT ********************/
test('Price 55 000 and progressive discount expected to be 46 750', () => {
  expect(Discount.caclDiscountedPrice(55000, 'PROGRESSIVE_DISCOUNT')).toBe(46750)
})
test('Price 50 000 and progressive discount expected to be 42 500', () => {
  expect(Discount.caclDiscountedPrice(50000, 'PROGRESSIVE_DISCOUNT')).toBe(42500)
})
test('Price 30 000 and progressive discount expected to be 27 000', () => {
  expect(Discount.caclDiscountedPrice(30000, 'PROGRESSIVE_DISCOUNT')).toBe(27000)
})
test('Price 10 000 and progressive discount expected to be 9 000', () => {
  expect(Discount.caclDiscountedPrice(10000, 'PROGRESSIVE_DISCOUNT')).toBe(9000)
})
test('Price 8 000 and progressive discount expected to be  7 440', () => {
  expect(Discount.caclDiscountedPrice(8000, 'PROGRESSIVE_DISCOUNT')).toBe(7440)
})
test('Price 7 000 and progressive discount expected to be 6 510', () => {
  expect(Discount.caclDiscountedPrice(7000, 'PROGRESSIVE_DISCOUNT')).toBe(6510)
})
test('Price 6 000 and progressive discount expected to be 5 700', () => {
  expect(Discount.caclDiscountedPrice(6000, 'PROGRESSIVE_DISCOUNT')).toBe(5700)
})
test('Price 5 000 and progressive discount expected to be 4 750', () => {
  expect(Discount.caclDiscountedPrice(5000, 'PROGRESSIVE_DISCOUNT')).toBe(4750)
})
test('Price 3 000 and progressive discount expected to be 2 910', () => {
  expect(Discount.caclDiscountedPrice(3000, 'PROGRESSIVE_DISCOUNT')).toBe(2910)
})
test('Price 1 000 and progressive discount expected to be 970', () => {
  expect(Discount.caclDiscountedPrice(1000, 'PROGRESSIVE_DISCOUNT')).toBe(970)
})
test('Price 100 and progressive discount expected to be 100', () => {
  expect(Discount.caclDiscountedPrice(100, 'PROGRESSIVE_DISCOUNT')).toBe(100)
})

/** ****************** FIXED DISCOUNT ********************/
test('Price 10 and fixed discount expected to be 10', () => {
  expect(Discount.caclDiscountedPrice(10, 'FIXED_DISCOUNT')).toBe(10)
})
test('Price 100 and fixed discount expected to be 90', () => {
  expect(Discount.caclDiscountedPrice(100, 'FIXED_DISCOUNT')).toBe(90)
})
test('Price 200 and fixed discount expected to be 190', () => {
  expect(Discount.caclDiscountedPrice(200, 'FIXED_DISCOUNT')).toBe(190)
})
test('Price 400 and fixed discount expected to be 350', () => {
  expect(Discount.caclDiscountedPrice(400, 'FIXED_DISCOUNT')).toBe(350)
})
test('Price 1 000 and fixed discount expected to be 800', () => {
  expect(Discount.caclDiscountedPrice(1000, 'FIXED_DISCOUNT')).toBe(800)
})
test('Price 5 000 and fixed discount expected to be 4 800', () => {
  expect(Discount.caclDiscountedPrice(5000, 'FIXED_DISCOUNT')).toBe(4800)
})

/** ****************** INVALID ********************/
test('Price 10 and invalid discount FULL_DISCOUNT', () => {
  expect(() => { Discount.caclDiscountedPrice(10, 'FULL_DISCOUNT') }).toThrow(new Error('Discount type is not valid'))
})

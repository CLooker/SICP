const { product, sum } = require('./1.32');
const { generalSum } = require('../1.29/1.29');
let { product: regProduct } = require('../1.31/1.31');
const { getInts } = require('../../utils');

const inc = num => ++num;
const identity = x => x;
regProduct = regProduct(inc, identity);
const regSum = generalSum(inc, identity);

describe('$product & $sum', () => {
  const ints = getInts(0, 50);
  ints.forEach(int => {
    const [min, max] = int !== 0 ? [-int, int] : [int, int];
    test('$product calculates the correct value', () => {
      expect(product(min, max)).toBe(regProduct(min, max));
    });
    test('$sum calculates the correct value', () => {
      expect(sum(min, max)).toBe(regSum(min, max));
    });
  });
});

const { multiply, altMultiply } = require('./1.17');
const { getNums } = require('../../utils');

describe('multiply fns', () => {
  const nums = getNums(0, 10);
  const otherNums = [...nums].reverse();

  nums.forEach(num => {
    otherNums.forEach(otherNum => {
      const expected = num * otherNum;

      test('multiply fn works', () => {
        expect(multiply(num, otherNum)).toBe(expected);
      });

      test('altMultiply fn works', () => {
        expect(altMultiply(num, otherNum)).toBe(expected);
      });
    });
  });
});

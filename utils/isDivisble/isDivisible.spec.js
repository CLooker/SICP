const isDivisible = require('./isDivisible');
const { getNums } = require('../../utils');

describe('isDivisible', () => {
  const nums = getNums(-50, 50);
  const otherNums = getNums(5555, 5560);

  nums.forEach(num => {
    otherNums.forEach(otherNum => {
      it('should compute divisibility correctly', () => {
        const actual = isDivisible(num, otherNum);
        const expected = num % otherNum === 0;
        expect(actual).toBe(expected);
      });
    });
  });
});

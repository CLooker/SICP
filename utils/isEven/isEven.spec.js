const isEven = require('./isEven');
const { getNums } = require('../../utils');

describe('isEven', () => {
  const nums = getNums(100, 65);

  nums.forEach(num => {
    it('should calculate if a number is even', () => {
      const actual = isEven(num);
      const expected = num % 2 === 0;
      expect(actual).toBe(expected);
    });
  });
});

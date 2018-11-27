const isEven = require('./isEven');
const { getInts } = require('../../utils');

describe('isEven', () => {
  const ints = getInts(100, 65);

  ints.forEach(int => {
    it('should calculate if a integer is even', () => {
      const actual = isEven(int);
      const expected = int % 2 === 0;
      expect(actual).toBe(expected);
    });
  });
});

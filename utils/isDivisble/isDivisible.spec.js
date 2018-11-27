const isDivisible = require('./isDivisible');
const { getInts } = require('../../utils');

describe('isDivisible', () => {
  const ints = getInts(-50, 50);
  const otherInts = getInts(5555, 5560);

  ints.forEach(int => {
    otherInts.forEach(otherInt => {
      it('should compute divisibility correctly', () => {
        const actual = isDivisible(int, otherInt);
        const expected = int % otherInt === 0;
        expect(actual).toBe(expected);
      });
    });
  });
});

const { multiply, altMultiply } = require('./1.17');
const { getInts } = require('../../utils');

describe('multiply fns', () => {
  const ints = getInts(0, 10);
  const otherInts = [...ints].reverse();

  ints.forEach(int => {
    otherInts.forEach(otherInt => {
      const expected = int * otherInt;

      test('multiply fn works', () => {
        expect(multiply(int, otherInt)).toBe(expected);
      });

      test('altMultiply fn works', () => {
        expect(altMultiply(int, otherInt)).toBe(expected);
      });
    });
  });
});

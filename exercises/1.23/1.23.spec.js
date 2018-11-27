const smallestDivisor = require('./1.23');

describe('smallestDivisor', () => {
  const intsToDivisors = {
    199: [199],
    1999: [1999],
    19999: [7, 2857, 19999]
  };

  Object.entries(intsToDivisors).forEach(([int, divisors]) => {
    it('should find the smallestDivisor', () => {
      const actual = smallestDivisor(parseInt(int));
      const [expected] = divisors;
      expect(actual).toBe(expected);
    });
  });
});

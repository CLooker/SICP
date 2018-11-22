const smallestDivisor = require('./1.21');

describe('smallestDivisor', () => {
  const numsToDivisors = {
    199: [199],
    1999: [1999],
    19999: [7, 2857, 19999]
  };

  Object.entries(numsToDivisors).forEach(([num, divisors]) => {
    it('should find the smallestDivisor', () => {
      const actual = smallestDivisor(parseInt(num));
      const [expected] = divisors;
      expect(actual).toBe(expected);
    });
  });
});

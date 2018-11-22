const npmGetPrimes = require('primes');
const getPrimes = require('./1.22');

describe('getPrimes', () => {
  it('should get the right primes', () => {
    const min = 0;
    const max = 500;
    const actual = getPrimes(min, max);
    const expected = npmGetPrimes(min, max);
    expect(actual).toEqual(expected);
  });
});

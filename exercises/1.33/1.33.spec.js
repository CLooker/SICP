const { getSumOfPrimeSquares, getProductOfRelativePrimes } = require('./1.33');
const getPrimes = require('../1.22/1.22');
const { getInts } = require('../../utils');

const min = 0;
const max = 50;

// to test logic encapsulated in $productOfRelativePrimes
const intForRelativePrimeComparison = max;
const isRelativePrime = int => {
  if (int >= intForRelativePrimeComparison) return false;
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return gcd(int, intForRelativePrimeComparison) === 1;
};

describe('$getSumOfPrimeSquares & $getProductOfRelativePrimes', () => {
  const ints = getInts(min, max);
  const primes = getPrimes(min, max);

  ints.forEach(int => {
    test('$getSumOfPrimes should calculate the correct value', () => {
      const manualSumOfPrimeSquares = primes
        .filter(prime => prime <= int)
        .reduce((total, prime) => total + prime * prime, 0);
      expect(getSumOfPrimeSquares(0, int)).toBe(manualSumOfPrimeSquares);
    });

    test('$getProductOfRelativePrimes should calculate the correct value', () => {
      const manualProductOfRelativePrimes = ints
        .filter(int => isRelativePrime(int))
        .reduce((total, relativePrime) => total * relativePrime, 1);
      expect(getProductOfRelativePrimes(max)(min, max)).toBe(
        manualProductOfRelativePrimes
      );
    });
  });
});

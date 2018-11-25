const fermatTest = require('./1.27');
const getPrimes = require('../1.22/1.22');
const smallestDivisor = require('../1.23/1.23');
const isPrime = num => num === smallestDivisor(num);

describe('$fermatTest relationship with prime and Carmichael numbers', () => {
  const CarmichaelNums = [561, 1105, 1729, 2465, 2821, 6601];
  const primes = getPrimes(0, 1000);

  primes.forEach(prime => {
    test('$fermatTest is not tricked', () => {
      expect(fermatTest(prime)).toBeTruthy();
    });
  });

  CarmichaelNums.forEach(CarmichaelNum => {
    test('$fermatTest is tricked', () => {
      expect(fermatTest(CarmichaelNum)).not.toBe(isPrime(CarmichaelNum));
    });
  });
});

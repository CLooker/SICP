const isPrime = require('./1.28');
const getPrimes = require('../1.22/1.22');
const { getInts } = require('../../utils');

describe('Miller-Rabin Primality Test', () => {
  const min = 0;
  const max = 1000;
  const primes = getPrimes(min, max);
  getInts(min, max).forEach(int => {
    test('Miller-Rabin correctly identifies if a number is prime', () => {
      expect(isPrime(int)).toBe(primes.includes(int));
    });
  });

  [561, 1105, 1729, 2465, 2821, 6601].forEach(CarmichaelNum => {
    test('Miller-Rabin is not tricked', () => {
      expect(isPrime(CarmichaelNum)).toBeFalsy();
    });
  });
});

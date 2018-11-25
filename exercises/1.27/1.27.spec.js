const fermatTest = require('./1.27');
const getPrimes = require('../1.22/1.22');
const smallestDivisor = require('../1.23/1.23');
const isPrime = num => num === smallestDivisor(num);

describe('$fermatTest relationship with prime and Carmichael numbers', () => {
  getPrimes(0, 1000).forEach(prime => {
    test('$fermatTest is not tricked', () => {
      expect(fermatTest(prime)).toBeTruthy();
    });
  });

  [561, 1105, 1729, 2465, 2821, 6601].forEach(CarmichaelNum => {
    test('$fermatTest is tricked', () => {
      expect(fermatTest(CarmichaelNum)).not.toBe(isPrime(CarmichaelNum));
    });
  });
});

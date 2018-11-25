const fermatTest = require('./1.27');
const getPrimes = require('../1.22/1.22.js');
const smallestDivisor = require('../1.23/1.23.js');

const isPrime = num => num === smallestDivisor(num);

describe('$fermatTest relationship with Carmichael numbers', () => {
  const CarmichaelNums = [561, 1105, 1729, 2465, 2821, 6601];

  CarmichaelNums.forEach(CarmichaelNum => {
    test('the Carmichael is not a prime number', () => {
      expect(isPrime(CarmichaelNum)).toBeFalsy();
    });
    test('the Carmichael fools the $fermatTest', () => {
      expect(fermatTest(CarmichaelNum)).toBeTruthy();
    });
  });
});

describe('$fermatTest still generally good at picking out primes', () => {
  const primes = getPrimes(0, 10000);

  primes.forEach(prime => {
    test('$fermatTest confirms each $prime', () => {
      expect(fermatTest(prime)).toBeTruthy();
    });
  });
});

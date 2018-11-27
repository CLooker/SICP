/* 
Write a procedure that checks the primality of consecutive odd integers
in a specified range. Use your procedure to find the three smallest primes
larger than: 1,000, 10,000, 100,000, and 1,000,000.
Note the time needed to test each.
*/

const smallestDivisor = require('../1.21/1.21');
const isPrime = int => int === smallestDivisor(int);
const { isEven } = require('../../utils');

const getTestTime = async int => {
  const start = process.hrtime();
  await isPrime(int);
  const end = process.hrtime(start);
  return end[1] / 1000000;
};

const getPrimes = (min, max) => {
  const fastGetPrimes = (currMin, primes = [2]) =>
    currMin > max
      ? primes
      : isEven(currMin)
      ? fastGetPrimes(currMin + 1, primes)
      : fastGetPrimes(
          currMin + 2,
          isPrime(currMin) ? primes.concat(currMin) : primes
        );

  return fastGetPrimes(min <= 2 ? 3 : min);
};

module.exports = getPrimes;

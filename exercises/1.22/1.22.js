/* 
Write a procedure that checks the primality of consecutive odd integers
in a specified range. Use your procedure to find the three smallest primes
larger than: 1,000, 10,000, 100,000, and 1,000,000.
Note the time needed to test each.
The testing algorithm getPrimeTestTime has order of growth theta(sqrt(n)),
so you should expect that testing for primes around 10,000 should take about
sqrt(10) times as long as testing for primes near 1,000.
Do your timing data confirm this?
*/

const smallestDivisor = require('../1.21/1.21');
const isPrime = num => num === smallestDivisor(num);
const { isEven } = require('../../utils');

const getPrimeTestTime = async num => {
  const start = process.hrtime();
  await isPrime(num);
  const end = process.hrtime(start);
  const elapsedTimeMs = end[1] / 1000000;
  return elapsedTimeMs;
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

/*
You can obtain an even more general version of $accumulate
by introducing the notion of a $filter on the terms to be combined.
That is, combine only those terms derived from values in the range
that satisfy a specified condition.

Show how to express the following using $filteredAcc
  a.  the sum of the squares of the prime numbers in the interval a to b
  b.  the product of all the positive integers less than n that are 
      relatively prime to n 
      (all positive integers i < n such that gcd(i, n) === 1)
*/
const isPrime = require('../1.28/1.28');
const add = (a, b) => a + b;
const inc = num => ++num;
const square = num => num * num;
const multiply = (a, b) => a * b;
const identity = x => x;

const filteredAcc = (
  predFn,
  updateTotalFn,
  updateMinFn,
  updateTermFn,
  startingTotal
) => (min, max) => {
  let total = startingTotal;
  for (let currMin = min; currMin <= max; currMin = updateMinFn(currMin))
    if (predFn(currMin)) total = updateTotalFn(total, updateTermFn(currMin));
  return total;
};

const getSumOfPrimeSquares = filteredAcc(isPrime, add, inc, square, 0);

const getProductOfRelativePrimes = intForRelativePrimeComparison => {
  const isRelativePrime = int => {
    if (int >= intForRelativePrimeComparison) return false;
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return gcd(int, intForRelativePrimeComparison) === 1;
  };

  return filteredAcc(isRelativePrime, multiply, inc, identity, 1);
};

module.exports = { getSumOfPrimeSquares, getProductOfRelativePrimes };

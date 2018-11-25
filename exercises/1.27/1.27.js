/* 
Demonstrate that Carmichael numbers really do fool the Fermat test.
Write a procedure that takes an integer n and tests whether a^n is congruent 
to a%n for every a<n, and try your procedure on Carmichael numbers.
*/

const { isEven, square } = require('../../utils');

const expmod = (base, exp, m) => {
  if (exp === 0) return 1;
  if (isEven(exp)) {
    const x = square(expmod(base, exp / 2, m));
    return x % m;
  }

  const x = base * expmod(base, exp - 1, m);
  return x % m;
};

const random = (min, limit) =>
  Math.floor(
    Math.random() * (Math.ceil(min) - Math.floor(limit)) + Math.ceil(min)
  );

const fermatTest = num => {
  const tryIt = a => expmod(a, num, num) === a;
  return tryIt(1 + random(0, num - 1));
};

module.exports = fermatTest;

/* 
Demonstrate that Carmichael numbers really do fool the Fermat test.
Write a procedure that takes an integer n and tests whether a^n is congruent 
to a%n for every a<n, and try your procedure on Carmichael numbers.
*/

const { getNums, isEven, square } = require('../../utils');

const expmod = (base, exp, divisor) =>
  exp === 0
    ? 1
    : isEven(exp)
    ? square(expmod(base, exp / 2, divisor)) % divisor
    : (base * expmod(base, exp - 1, divisor)) % divisor;

const fermatTest = num =>
  getNums(1, num - 1).every(currNum => currNum === expmod(currNum, num, num));

module.exports = fermatTest;
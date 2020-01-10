/* 
Use the smallestDivisor procedure to find the smallest divisor of
each of the following integers: 199, 1999, 19999
*/

const { square, isDivisible } = require('../../utils');

const smallestDivisor = int => findDivisor(int);
const findDivisor = (int, testDivisor = 2) =>
  square(testDivisor) > int
    ? int
    : isDivisible(int, testDivisor)
    ? testDivisor
    : findDivisor(int, testDivisor + 1);

module.exports = smallestDivisor;

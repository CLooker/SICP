/* 
Use the smallestDivisor procedure to find the smallest divisor of
each of the following numbers: 199, 1999, 19999
*/

const { square, isDivisbile } = require('../../utils');

const smallestDivisor = num => findDivisor(num);
const findDivisor = (num, testDivisor = 2) =>
  square(testDivisor) > num
    ? num
    : isDivisbile(num, testDivisor)
    ? testDivisor
    : findDivisor(num, testDivisor + 1);

module.exports = smallestDivisor;

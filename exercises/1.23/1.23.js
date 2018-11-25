/* 
The $smallestDivisor procedure from 1.21 does lots of needless testing.
After it checks to see if the number is divisible by 2,
there is no point in checking to see if it is divisible by any larger even numbers.
Define a procedure $next that returns 3 if its input is equal to 2,
and otherwise returns the input plus 2. Modify $smallestDivisor to use $next.
*/

const { square, isDivisbile } = require('../../utils');

const smallestDivisor = num => findDivisor(num);
const next = num => (num === 2 ? 3 : num + 2);
const findDivisor = (num, testDivisor = 2) =>
  square(testDivisor) > num
    ? num
    : isDivisbile(num, testDivisor)
    ? testDivisor
    : findDivisor(num, next(testDivisor));

module.exports = smallestDivisor;

/* 
The $smallestDivisor procedure from 1.21 does lots of needless testing.
After it checks to see if the integer is divisible by 2,
there is no point in checking to see if it is divisible by any larger even integers.
Define a procedure $next that returns 3 if its input is equal to 2,
and otherwise returns the input plus 2. Modify $smallestDivisor to use $next.
*/

const { square, isDivisible } = require('../../utils');

const smallestDivisor = int => findDivisor(int);
const next = int => (int === 2 ? 3 : int + 2);
const findDivisor = (int, testDivisor = 2) =>
  square(testDivisor) > int
    ? int
    : isDivisible(int, testDivisor)
    ? testDivisor
    : findDivisor(int, next(testDivisor));

module.exports = smallestDivisor;

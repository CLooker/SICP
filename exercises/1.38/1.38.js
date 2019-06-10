/* 
  Write a program that uses $contFrac to approximate e, 
  based on Euler's expansion
*/

const { contFrac } = require('../1.37/1.37');

const approximateE = maxCalculations =>
  2 +
  contFrac(
    _ => 1,
    i => (3 % (i + 1) === 0 ? 2 * (3 / (i + 1)) : 1),
    maxCalculations
  );

module.exports = approximateE;
